import InlineLeadForm from "./InlineLeadForm";

type Props = {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  tone?: "light" | "dark";
  /** Forwarded to InlineLeadForm → ContactForm. */
  prioritizeUrbanRenewal?: boolean;
};

export default function ContactCTA(props: Props) {
  return <InlineLeadForm {...props} />;
}
