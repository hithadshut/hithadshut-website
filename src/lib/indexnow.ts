import { site } from "./site";

/**
 * IndexNow integration.
 *
 * IndexNow is a protocol that lets sites notify search engines (Bing, Yandex,
 * Seznam, Naver, Yep) when URLs are added, updated, or deleted. Google does
 * NOT participate directly, but the signal reaches Bingbot quickly.
 *
 * Docs: https://www.indexnow.org/documentation
 */

export const INDEXNOW_KEY = "a1b2c3d4e5f678901234567890abcdef";

export const INDEXNOW_KEY_LOCATION = `${site.url}/${INDEXNOW_KEY}.txt`;

const INDEXNOW_HOST = "hithadshut.co.il";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export type IndexNowResult = {
  ok: boolean;
  status: number;
  statusText: string;
  body: string;
  submittedCount: number;
};

/**
 * Submit a batch of URLs to IndexNow. Max 10,000 URLs per call per the spec.
 * Returns the raw HTTP response info for logging.
 */
export async function submitUrlsToIndexNow(
  urls: string[]
): Promise<IndexNowResult> {
  if (urls.length === 0) {
    return {
      ok: true,
      status: 0,
      statusText: "no-op (empty url list)",
      body: "",
      submittedCount: 0,
    };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let body = "";
  try {
    body = await res.text();
  } catch {
    body = "<unable to read response body>";
  }

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
    body,
    submittedCount: urls.length,
  };
}
