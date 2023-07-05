import Link from "next/link";
import style from "../styles/Contact.module.css";

const ContactUs = () => {
  const { contact_container, contact_heading, paragragh, content } = style;
  return (
    <div className={contact_container}>
      <div className={content}>
        <span className={contact_heading}>Contact us</span>
        <div className={paragragh}>
          <p>
            If you are building something related to some of the themes below,
            we welcome you to contact us at{" "}
            <span>
              <Link href="mailto:invest@ngc.fund">invest@ngc.fund</Link>
            </span>
            . For a general query, feel free to contact us on
            <br />
            <span>
              <Link href="https://twitter.com/ronkips" target="_blank">
                twitter
              </Link>
            </span>
            .
          </p>
          <p>
            Blockchain infrastructure forms the core of our investment thesis,
            driven in particular by areas such as decentralizing the different
            layers of blockchain protocols <br />
            (storage, data indexing, computation, oracles, node infrastructure
            etc), account abstraction, interchain operability. We also invest in
            innovative projects on the
            <br /> application layer in DeFi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
// <Link href="https://twitter.com/ronkips" target="_blank"></Link>