import React, { useState } from "react";

function Privacy() {
  const [policy1, setpolicy1] = useState(0);
  const [policy2, setpolicy2] = useState(0);
  const [policy3, setpolicy3] = useState(0);
  const [policy4, setpolicy4] = useState(0);
  const [policy5, setpolicy5] = useState(0);
  const [policy6, setpolicy6] = useState(0);
  const [policy7, setpolicy7] = useState(0);
  const [policy8, setpolicy8] = useState(0);

  return (
    <div>
      <div className="w-full h-fit wrapper flex flex-col">
        <h1 className="font-montserrat font-bold text-[2vw] text-left pl-[5vw] pt-[5vw]">
          Privacy Policy
        </h1>
        <div className="font-montserrat px-[8vw] py-[2vw]">
          <p className="font-montserrat text-[1vw] text-left py-[0.75vw]">
            This privacy policy ("Policy") describes how the personally
            identifiable information ("Personal Information") you may provide in
            the "Let's Flp" mobile application ("Mobile Application" or
            "Service") and any of its related products and services
            (collectively, "Services") is collected, protected and used. It also
            describes the choices available to you regarding our use of your
            Personal Information and how you can access and update this
            information. This Policy is a legally binding agreement between you
            ("User", "you" or "your") and Let's Flip LLP ("Let's Flip LLP",
            "we", "us" or "our"). By accessing and using the Mobile Application
            and Services, you acknowledge that you have read, understood, and
            agree to be bound by the terms of this Policy. This Policy does not
            apply to the practices of companies that we do not own or control,
            or to individuals that we do not employ or manage.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Automatic collection of information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Our top priority is customer data security and, as such, we exercise
            the no logs policy. We may process only minimal user data, only as
            much as it is absolutely necessary to maintain the Mobile
            Application and Services. Information collected automatically is
            used only to identify potential cases of abuse and establish
            statistical information regarding the usage of the Mobile
            Application and Services. This statistical information is not
            otherwise aggregated in such a way that would identify any
            particular user of the system.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Collection of personal information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            You can access and use the Mobile Application and Services without
            telling us who you are or revealing any information by which someone
            could identify you as a specific, identifiable individual. If,
            however, you wish to use some of the features in the Mobile
            Application, you may be asked to provide certain Personal
            Information (for example, your name and e-mail address). We receive
            and store any information you knowingly provide to us when you
            create an account, publish content, make a purchase, or fill any
            online forms in the Mobile Application. When required, this
            information may include the following:
          </p>
          <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
            <li> Personal details such as name, country of residence, etc.</li>
            <li>Contact information such as email address, address, etc.</li>
            <li>
              Account details such as user name, unique user ID, password, etc.
            </li>
            <li>
              Payment information such as credit card details, bank details,
              etc.
            </li>
            <li>Geolocation data such as latitude and longitude.</li>
            <li>
              Certain features on the mobile device such as contacts, calendar,
              gallery, etc.
            </li>
          </ul>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Some of the information we collect is directly from you via the
            Mobile Application and Services. However, we may also collect
            Personal Information about you from other sources such as public
            databases, social media platforms, third-party data providers, and
            our joint marketing partners. Personal Information we collect from
            other sources may include demographic information, such as age and
            gender, device information, such as IP addresses, location, such as
            city and state, and online behavioral data, such as information
            about your use of social media websites, page view information and
            search results and links. You can choose not to provide us with your
            Personal Information, but then you may not be able to take advantage
            of some of the features in the Mobile Application. Users who are
            uncertain about what information is mandatory are welcome to contact
            us.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Use and processing of collected information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            In order to make the Mobile Application and Services available to
            you, or to meet a legal obligation, we may need to collect and use
            certain Personal Information. If you do not provide the information
            that we request, we may not be able to provide you with the
            requested products or services. Any of the information we collect
            from you may be used for the following purposes:
          </p>
          <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
            <li>Create and manage user accounts</li>
            <li>Fulfill and manage orders</li>
            <li>Deliver products or services</li>
            <li>Improve products and services</li>
            <li>Send administrative information</li>
            <li>Send marketing and promotional communications</li>
            <li>Respond to inquiries and offer support</li>
            <li>Request user feedback</li>
            <li>Improve user experience</li>
            <li>Post customer testimonials</li>
            <li>Deliver targeted advertising</li>
            <li>Administer prize draws and competitions</li>
            <li>Enforce terms and conditions and policies</li>
            <li>Protect from abuse and malicious users</li>
            <li>Respond to legal requests and prevent harm</li>
            <li>Run and operate the Mobile Application and Services</li>
          </ul>

          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Processing your Personal Information depends on how you interact
            with the Mobile Application and Services, where you are located in
            the world and if one of the following applies: (i) you have given
            your consent for one or more specific purposes; this, however, does
            not apply, whenever the processing of Personal Information is
            subject to California Consumer Privacy Act or European data
            protection law; (ii) provision of information is necessary for the
            performance of an agreement with you and/or for any pre-contractual
            obligations thereof; (iii) processing is necessary for compliance
            with a legal obligation to which you are subject; (iv) processing is
            related to a task that is carried out in the public interest or in
            the exercise of official authority vested in us; (v) processing is
            necessary for the purposes of the legitimate interests pursued by us
            or by a third party. <br></br>
            <br></br> Note that under some legislations we may be allowed to
            process information until you object to such processing (by opting
            out), without having to rely on consent or any other of the
            following legal bases below. In any case, we will be happy to
            clarify the specific legal basis that applies to the processing, and
            in particular whether the provision of Personal Information is a
            statutory or contractual requirement, or a requirement necessary to
            enter into a contract.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Billing and payments
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            In case of services requiring payment, we request credit card or
            other payment account information, which will be used solely for
            processing payments. Your purchase transaction data is stored only
            as long as is necessary to complete your purchase transaction. After
            that is complete, your purchase transaction information is deleted.
            All direct payment gateways adhere to the latest security standards
            as managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover. Sensitive and private data exchange happens over a SSL
            secured communication channel and is encrypted and protected with
            digital signatures, and the Mobile Application and Services are also
            in compliance with PCI vulnerability standards in order to create as
            secure of an environment as possible for Users. Scans for malware
            are performed on a regular basis for additional security and
            protection.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Managing information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            You are able to delete certain Personal Information we have about
            you. The Personal Information you can delete may change as the
            Mobile Application and Services change. When you delete Personal
            Information, however, we may maintain a copy of the unrevised
            Personal Information in our records for the duration necessary to
            comply with our obligations to our affiliates and partners, and for
            the purposes described below. If you would like to delete your
            Personal Information or permanently delete your account, you can do
            so on the settings page of your account in the Mobile Application.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Disclosure of information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Depending on the requested Services or as necessary to complete any
            transaction or provide any service you have requested, we may share
            your information with your consent with our trusted third parties
            that work with us, any other affiliates and subsidiaries we rely
            upon to assist in the operation of the Mobile Application and
            Services available to you. We do not share Personal Information with
            unaffiliated third parties. These service providers are not
            authorized to use or disclose your information except as necessary
            to perform services on our behalf or comply with legal requirements.
            We may share your Personal Information for these purposes only with
            third parties whose privacy policies are consistent with ours or who
            agree to abide by our policies with respect to Personal Information.
            These third parties are given Personal Information they need only in
            order to perform their designated functions, and we do not authorize
            them to use or disclose Personal Information for their own marketing
            or other purposes. <br></br>
            <br></br> We will disclose any Personal Information we collect, use
            or receive if required or permitted by law, such as to comply with a
            subpoena, or similar legal process, and when we believe in good
            faith that disclosure is necessary to protect our rights, protect
            your safety or the safety of others, investigate fraud, or respond
            to a government request.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Retention of information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We will retain and use your Personal Information for the period
            necessary to comply with our legal obligations, resolve disputes,
            and enforce our agreements unless a longer retention period is
            required or permitted by law. We may use any aggregated data derived
            from or incorporating your Personal Information after you update or
            delete it, but not in a manner that would identify you personally.
            Once the retention period expires, Personal Information shall be
            deleted. Therefore, the right to access, the right to erasure, the
            right to rectification and the right to data portability cannot be
            enforced after the expiration of the retention period.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Transfer of information
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Depending on your location, data transfers may involve transferring
            and storing your information in a country other than your own. You
            are entitled to learn about the legal basis of information transfers
            to a country outside the European Union or to any international
            organization governed by public international law or set up by two
            or more countries, such as the UN, and about the security measures
            taken by us to safeguard your information. If any such transfer
            takes place, you can find out more by checking the relevant sections
            of this Policy or inquire with us using the information provided in
            the contact section.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            The rights of users
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            You may exercise certain rights regarding your information processed
            by us. In particular, you have the right to do the following:
          </p>
          <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
            <li>
              You have the right to withdraw consent where you have previously
              given your consent to the processing of your information;
            </li>
            <li>
              You have the right to object to the processing of your information
              if the processing is carried out on a legal basis other than
              consent;
            </li>
            <li>
              You have the right to learn if information is being processed by
              us, obtain disclosure regarding certain aspects of the processing
              and obtain a copy of the information undergoing processing;
            </li>
            <li>
              You have the right to verify the accuracy of your information and
              ask for it to be updated or corrected;
            </li>
            <li>
              You have the right, under certain circumstances, to restrict the
              processing of your information, in which case, we will not process
              your information for any purpose other than storing it
            </li>
            <li>
              You have the right, under certain circumstances, to obtain the
              erasure of your Personal Information from us;
            </li>
            <li>
              You have the right to receive your information in a structured,
              commonly used and machine readable format and, if technically
              feasible, to have it transmitted to another controller without any
              hindrance. This provision is applicable provided that your
              information is processed by automated means and that the
              processing is based on your consent, on a contract which you are
              part of or on pre-contractual obligations thereof.
            </li>
          </ul>
          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            The right to object to processing
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Where Personal Information is processed for the public interest, in
            the exercise of an official authority vested in us or for the
            purposes of the legitimate interests pursued by us, you may object
            to such processing by providing a ground related to your particular
            situation to justify the objection. You must know that, however,
            should your Personal Information be processed for direct marketing
            purposes, you can object to that processing at any time without
            providing any justification. To learn whether we are processing
            Personal Information for direct marketing purposes, you may refer to
            the relevant sections of this document.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Data protection rights under GDPR
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights and Let's Flip LLP aims to take
            reasonable steps to allow you to correct, amend, delete, or limit
            the use of your Personal Information. If you wish to be informed
            what Personal Information we hold about you and if you want it to be
            removed from our systems, please contact us. In certain
            circumstances, you have the following data protection rights:
          </p>
          <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
            <li>
              You have the right to request access to your Personal Information
              that we store and have the ability to access your Personal
              Information.
            </li>
            <li>
              You have the right to request that we correct any Personal
              Information you believe is inaccurate. You also have the right to
              request us to complete the Personal Information you believe is
              incomplete.
            </li>
            <li>
              You have the right to request the erase your Personal Information
              under certain conditions of this Policy.
            </li>
            <li>
              You have the right to object to our processing of your Personal
              Information.
            </li>
            <li>
              You have the right to seek restrictions on the processing of your
              Personal Information. When you restrict the processing of your
              Personal Information, we may store it but will not process it
              further.
            </li>
            <li>
              You have the right to be provided with a copy of the information
              we have on you in a structured, machine-readable and commonly used
              format.
            </li>
            <li>
              You also have the right to withdraw your consent at any time where
              Let's Flip LLP relied on your consent to process your Personal
              Information.
            </li>
            <li>
              You have the right to complain to a Data Protection Authority
              about our collection and use of your Personal Information. For
              more information, please contact your local data protection
              authority in the European Economic Area (EEA).
            </li>
          </ul>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            California privacy rights
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            In addition to the rights as explained in this Policy, California
            residents who provide Personal Information (as defined in the
            statute) to obtain products or services for personal, family, or
            household use are entitled to request and obtain from us, once a
            calendar year, information about the Personal Information we shared,
            if any, with other businesses for marketing uses. If applicable,
            this information would include the categories of Personal
            Information and the names and addresses of those businesses with
            which we shared such personal information for the immediately prior
            calendar year (e.g., requests made in the current year will receive
            information about the prior year). To obtain this information please
            contact us.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            How to exercise these rights
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            Any requests to exercise your rights can be directed to Let's Flip
            LLP through the contact details provided in this document. Please
            note that we may ask you to verify your identity before responding
            to such requests. Your request must provide sufficient information
            that allows us to verify that you are the person you are claiming to
            be or that you are the authorized representative of such person. You
            must include sufficient details to allow us to properly understand
            the request and respond to it. We cannot respond to your request or
            provide you with Personal Information unless we first verify your
            identity or authority to make such a request and confirm that the
            Personal Information relates to you.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Privacy of children
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We recognize the need to provide further privacy protections with
            respect to Personal Information we may collect from children and
            take many special precautions to protect the privacy of children. We
            do not require a child to disclose more information than is
            reasonably necessary to use the Mobile Application and Services.
            Parents can review their child's information, delete it, and refuse
            to allow any further collection or use of such information. We
            encourage children to consult with their parents before submitting
            any information to any online resource , including our Mobile
            Application and Services. We believe parents should be involved in
            the online activities of their children and suggest that parents do
            their best to provide their children with a safe and friendly online
            environment.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Advertisements
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We may display online advertisements and we may share aggregated and
            non-identifying information about our customers that we or our
            advertisers collect through your use of the Mobile Application and
            Services. We do not share personally identifiable information about
            individual customers with advertisers. In some instances, we may use
            this aggregated and non-identifying information to deliver tailored
            advertisements to the intended audience.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Affiliates
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We may engage in affiliate marketing and have affiliate links
            present on the Mobile Application and Services. If you click on an
            affiliate link, a cookie will be placed on your browser to track any
            sales for purposes of commissions.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Email marketing
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We offer electronic newsletters to which you may voluntarily
            subscribe at any time. We are committed to keeping your e-mail
            address confidential and will not disclose your email address to any
            third parties except as allowed in the information use and
            processing section or for the purposes of utilizing a third party
            provider to send such emails. We will maintain the information sent
            via e-mail in accordance with applicable laws and regulations.
            <br></br>
            <br></br>In compliance with the CAN-SPAM Act, all e-mails sent from
            us will clearly state who the e-mail is from and provide clear
            information on how to contact the sender. You may choose to stop
            receiving our newsletter or marketing emails by following the
            unsubscribe instructions included in these emails or by contacting
            us. However, you will continue to receive essential transactional
            emails.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Links to other resources
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            The Mobile Application and Services contain links to other resources
            that are not owned or controlled by us. Please be aware that we are
            not responsible for the privacy practices of such other resources or
            third parties. We encourage you to be aware when you leave the
            Mobile Application and Services and to read the privacy statements
            of each and every resource that may collect Personal Information.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Information security
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We secure information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use, or disclosure. We maintain reasonable administrative,
            technical, and physical safeguards in an effort to protect against
            unauthorized access, use, modification, and disclosure of Personal
            Information in its control and custody. However, no data
            transmission over the Internet or wireless network can be
            guaranteed. Therefore, while we strive to protect your Personal
            Information, you acknowledge that :
          </p>
          <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
            <li>
              There are security and privacy limitations of the Internet which
              are beyond our control;
            </li>
            <li>
              The security, integrity, and privacy of any and all information
              and data exchanged between you and the Mobile Application and
              Services cannot be guaranteed;
            </li>
            <li>
              Any such information and data may be viewed or tampered with in
              transit by a third party, despite best efforts.
            </li>
          </ul>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Data breach
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            In the event we become aware that the security of the Mobile
            Application and Services has been compromised or users Personal
            Information has been disclosed to unrelated third parties as a
            result of external activity, including, but not limited to, security
            attacks or fraud, we reserve the right to take reasonably
            appropriate measures, including, but not limited to, investigation
            and reporting, as well as notification to and cooperation with law
            enforcement authorities. In the event of a data breach, we will make
            reasonable efforts to notify affected individuals if we believe that
            there is a reasonable risk of harm to the user as a result of the
            breach or if notice is otherwise required by law. When we do, we
            will post a notice in the Mobile Application, send you an email.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Changes and amendments
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            We reserve the right to modify this Policy or its terms relating to
            the Mobile Application and Services from time to time in our
            discretion and will notify you of any material changes to the way in
            which we treat Personal Information. When we do, we will revise the
            updated date at the bottom of this page. We may also provide notice
            to you in other ways in our discretion, such as through contact
            information you have provided. Any updated version of this Policy
            will be effective immediately upon the posting of the revised Policy
            unless otherwise specified. Your continued use of the Mobile
            Application and Services after the effective date of the revised
            Policy (or such other act specified at that time) will constitute
            your consent to those changes. However, we will not, without your
            consent, use your Personal Information in a manner materially
            different than what was stated at the time your Personal Information
            was collected.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Acceptance of this policy
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            You acknowledge that you have read this Policy and agree to all its
            terms and conditions. By accessing and using the Mobile Application
            and Services you agree to be bound by this Policy. If you do not
            agree to abide by the terms of this Policy, you are not authorized
            to access or use the Mobile Application and Services.
          </p>

          <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
            Contacting us
          </h2>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
            If you would like to contact us to understand more about this Policy
            or wish to contact us concerning any matter relating to individual
            rights and your Personal Information, you may send an email to{" "}
            <a
              className="underline text-blue-600"
              href="mailto:letsflipapplication@gmail.com"
            >
              letsflipapplication@gmail.com
            </a>
          </p>

          <div
            onClick={() => setpolicy1(!policy1)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              Acceptable use policy for Let's Fl!p
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy1 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>
          <div className={policy1 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Acceptable use policy
            </h3>

            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              This acceptable use policy ("Policy") sets forth the general
              guidelines and acceptable and prohibited uses of the "Let's Flp"
              mobile application ("Mobile Application" or "Service") and any of
              its related products and services (collectively, "Services"). This
              Policy is a legally binding agreement between you ("User", "you"
              or "your") and Let's Flip LLP ("Let's Flip LLP", "we", "us" or
              "our"). By accessing and using the Mobile Application and
              Services, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Agreement. If you are
              entering into this Agreement on behalf of a business or other
              legal entity, you represent that you have the authority to bind
              such entity to this Agreement, in which case the terms "User",
              "you" or "your" shall refer to such entity. If you do not have
              such authority, or if you do not agree with the terms of this
              Agreement, you must not accept this Agreement and may not access
              and use the Mobile Application and Services. You acknowledge that
              this Agreement is a contract between you and Let's Flip LLP, even
              though it is electronic and is not physically signed by you, and
              it governs your use of the Mobile Application and Services.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Prohibited activities and uses
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You may not use the Mobile Application and Services to publish
              content or engage in activity that is illegal under applicable
              law, that is harmful to others, or that would subject us to
              liability, including, without limitation, in connection with any
              of the following, each of which is prohibited under this Policy:
            </p>
            <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
              <li>Distributing malware or other malicious code.</li>
              <li>Disclosing sensitive personal information about others.</li>
              <li>
                Collecting, or attempting to collect, personal information about
                third parties without their knowledge or consent.
              </li>
              <li>Distributing pornography or adult related content.</li>
              <li>
                Promoting or facilitating prostitution or any escort services.
              </li>
              <li>
                Hosting, distributing or linking to child pornography or content
                that is harmful to minors.
              </li>
              <li>
                Promoting or facilitating gambling, violence, terrorist
                activities or selling weapons or ammunition.
              </li>
              <li>
                Engaging in the unlawful distribution of controlled substances,
                drug contraband or prescription medications.
              </li>
              <li>
                Managing payment aggregators or facilitators such as processing
                payments on behalf of other businesses or charities.
              </li>
              <li>
                Facilitating pyramid schemes or other models intended to seek
                payments from public actors.
              </li>
              <li>
                Threatening harm to persons or property or otherwise harassing
                behavior.
              </li>
              <li>
                Manual or automatic credit card or other available payment
                methods testing using bots or scripts.
              </li>
              <li>
                Purchasing any of the offered Services on someone else’s behalf.
              </li>
              <li>
                Misrepresenting or fraudulently representing products or
                services.
              </li>
              <li>
                Infringing the intellectual property or other proprietary rights
                of others.
              </li>
              <li>
                Facilitating, aiding, or encouraging any of the above activities
                through the Mobile Application and Services.
              </li>
            </ul>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              System abuse
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Any User in violation of the Mobile Application and Services
              security is subject to criminal and civil liability, as well as
              immediate account termination. Examples include, but are not
              limited to the following:
            </p>
            <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
              <li>
                Use or distribution of tools designed for compromising security
                of the Mobile Application and Services.
              </li>
              <li>
                Intentionally or negligently transmitting files containing a
                computer virus or corrupted data.
              </li>
              <li>
                Accessing another network without permission, including to probe
                or scan for vulnerabilities or breach security or authentication
                measures.
              </li>
              <li>
                Unauthorized scanning or monitoring of data on any network or
                system without proper authorization of the owner of the system
                or network.
              </li>
            </ul>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Service resources
            </h3>

            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You may not consume excessive amounts of the resources of the
              Mobile Application and Services or use the Mobile Application and
              Services in any way which results in performance issues or which
              interrupts the Services for other Users. Prohibited activities
              that contribute to excessive use, include without limitation:
            </p>

            <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
              <li>
                Deliberate attempts to overload the Mobile Application and
                Services and broadcast attacks (i.e. denial of service attacks).
              </li>
              <li>
                Engaging in any other activities that degrade the usability and
                performance of the Mobile Application and Services.
              </li>
              <li>
                Hosting or running malicious code or other scripts or processes
                that adversely impact the Mobile Application and Services.
              </li>
              <li>
                Operating a file sharing site or scripts for BitTorrent or
                similar, which includes sending or receiving files containing
                these mechanisms.
              </li>
              <li>
                Web proxy scripts, such as those that allow anyone to browse to
                a third party website anonymously, are prohibited.
              </li>
            </ul>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              No spam policy
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You may not use the Mobile Application and Services to send spam
              or bulk unsolicited messages. We maintain a zero tolerance policy
              for use of the Mobile Application and Services in any manner
              associated with the transmission, distribution or delivery of any
              bulk e-mail, including unsolicited bulk or unsolicited commercial
              e-mail, or the sending, assisting, or commissioning the
              transmission of commercial e-mail that does not comply with the
              U.S. CAN-SPAM Act of 2003 ("SPAM"). <br></br>
              <br></br> Your products or services advertised via SPAM (i.e.
              Spamvertised) may not be used in conjunction with the Mobile
              Application and Services. This provision includes, but is not
              limited to, SPAM sent via fax, phone, postal mail, email, instant
              messaging, or newsgroups.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Defamation and objectionable content
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We value the freedom of expression and encourage Users to be
              respectful with the content they post. We are not a publisher of
              User content and are not in a position to investigate the veracity
              of individual defamation claims or to determine whether certain
              material, which we may find objectionable, should be censored.
              However, we reserve the right to moderate, disable or remove any
              content to prevent harm to others or to us or the Mobile
              Application and Services, as determined in our sole discretion.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Copyrighted content
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Copyrighted material must not be published via the Mobile
              Application and Services without the explicit permission of the
              copyright owner or a person explicitly authorized to give such
              permission by the copyright owner. Upon receipt of a claim for
              copyright infringement, or a notice of such violation, we will
              immediately run full investigation and, upon confirmation, will
              notify the person or persons responsible for publishing it and, in
              our sole discretion, will remove the infringing material from the
              Mobile Application and Services. We may terminate the Service of
              Users with repeated copyright infringements. Further procedures
              may be carried out if necessary. We will assume no liability to
              any User of the Mobile Application and Services for the removal of
              any such material. If you believe your copyright is being
              infringed by a person or persons using the Mobile Application and
              Services, please get in touch with us to report copyright
              infringement.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Security
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You take full responsibility for maintaining reasonable security
              precautions for your account. You are responsible for protecting
              and updating any login account provided to you for the Mobile
              Application and Services. You are responsible for ensuring all
              User provided software installed by you on the Mobile Application
              and Services is updated and patched following industry best
              practice. We make no warranty express or implied for the security
              and operability of 3rd party software or scripts installed or run
              by you on the Mobile Application and Services.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Enforcement
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We reserve our right to be the sole arbiter in determining the
              seriousness of each infringement and to immediately take
              corrective actions, including but not limited to:
            </p>
            <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
              <li>
                Suspending or terminating your Service with or without notice
                upon any violation of this Policy. Any violations may also
                result in the immediate suspension or termination of your
                account.
              </li>
              <li>
                Disabling or removing any content which is prohibited by this
                Policy, including to prevent harm to others or to us or the
                Mobile Application and Services, as determined by us in our sole
                discretion.
              </li>
              <li>
                Reporting violations to law enforcement as determined by us in
                our sole discretion.
              </li>
              <li>
                A failure to respond to an email from our abuse team within 2
                days, or as otherwise specified in the communication to you, may
                result in the suspension or termination of your account.
              </li>
            </ul>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Suspended and terminated User accounts due to violations will not
              be re-activated.
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Nothing contained in this Policy shall be construed to limit our
              actions or remedies in any way with respect to any of the
              prohibited activities. We reserve the right to take any and all
              additional actions we may deem appropriate with respect to such
              activities, including without limitation taking action to recover
              the costs and expenses of identifying offenders and removing them
              from the Mobile Application and Services, and levying cancellation
              charges to cover our costs. In addition, we reserve at all times
              all rights and remedies available to us with respect to such
              activities at law or in equity.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Reporting violations
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              If you have discovered and would like to report a violation of
              this Policy, please contact us immediately. We will investigate
              the situation and provide you with full assistance.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Changes and amendments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We reserve the right to modify this Policy or its terms relating
              to the Mobile Application and Services at any time, effective upon
              posting of an updated version of this Policy in the Mobile
              Application. When we do, we will revise the updated date at the
              bottom of this page. Continued use of the Mobile Application and
              Services after any such changes shall constitute your consent to
              such changes.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Acceptance of this policy
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You acknowledge that you have read this Policy and agree to all
              its terms and conditions. By accessing and using the Mobile
              Application and Services you agree to be bound by this Policy. If
              you do not agree to abide by the terms of this Policy, you are not
              authorized to access or use the Mobile Application and Services.
            </p>
          </div>

          <div
            onClick={() => setpolicy2(!policy2)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              Cookie policy for getletsflip.com
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy2 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy2 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Cookie policy
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              This acceptable use policy ("Policy") sets forth the general
              guidelines and acceptable and prohibited uses of the "Let's Flp"
              mobile application ("Mobile Application" or "Service") and any of
              its related products and services (collectively, "Services"). This
              Policy is a legally binding agreement between you ("User", "you"
              or "your") and Let's Flip LLP ("Let's Flip LLP", "we", "us" or
              "our"). By accessing and using the Mobile Application and
              Services, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Agreement. If you are
              entering into this Agreement on behalf of a business or other
              legal entity, you represent that you have the authority to bind
              such entity to this Agreement, in which case the terms "User",
              "you" or "your" shall refer to such entity. If you do not have
              such authority, or if you do not agree with the terms of this
              Agreement, you must not accept this Agreement and may not access
              and use the Mobile Application and Services. You acknowledge that
              this Agreement is a contract between you and Let's Flip LLP, even
              though it is electronic and is not physically signed by you, and
              it governs your use of the Mobile Application and Services.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              What are cookies?
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Cookies are small pieces of data stored in text files that are
              saved on your computer or other devices when websites are loaded
              in a browser. They are widely used to remember you and your
              preferences, either for a single visit (through a "session
              cookie") or for multiple repeat visits (using a "persistent
              cookie"). <br></br>Session cookies are temporary cookies that are
              used during the course of your visit to the Website, and they
              expire when you close the web browser.<br></br> Persistent cookies
              are used to remember your preferences within our Website and
              remain on your desktop or mobile device even after you close your
              browser or restart your computer. They ensure a consistent and
              efficient experience for you while visiting the Website and
              Services.<br></br>
              Cookies may be set by the Website ("first-party cookies"), or by
              third parties, such as those who serve content or provide
              advertising or analytics services on the Website ("third party
              cookies"). These third parties can recognize you when you visit
              our website and also when you visit certain other websites. You
              may learn more about cookies and how they work in this guide.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              What type of cookies do we use?
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We do not use cookies to track your internet or Website usage, to
              collect or store your personal information or for any other
              reason. However, please be advised that in some countries, data
              such as cookie IDs is considered to be personal information. To
              the extent we process such data that is considered personal
              information, we will process the data in accordance with our
              privacy and cookie policies.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Changes and amendments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We reserve the right to modify this Policy or its terms relating
              to the Website and Services at any time, effective upon posting of
              an updated version of this Policy on the Website. When we do, we
              will revise the updated date at the bottom of this page. Continued
              use of the Website and Services after any such changes shall
              constitute your consent to such changes.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Acceptance of this policy
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You acknowledge that you have read this Policy and agree to all
              its terms and conditions. By accessing and using the Website and
              Services you agree to be bound by this Policy. If you do not agree
              to abide by the terms of this Policy, you are not authorized to
              access or use the Website and Services.
            </p>
          </div>

          <div
            onClick={() => setpolicy3(!policy3)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              Disclaimer for Let's Fl!p
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy3 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy3 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Disclaimer
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              This disclaimer ("Disclaimer") sets forth the general guidelines,
              disclosures, and terms of your use of the "Let's Flp" mobile
              application ("Mobile Application" or "Service") and any of its
              related products and services (collectively, "Services"). This
              Disclaimer is a legally binding agreement between you ("User",
              "you" or "your") and Let's Flip LLP ("Let's Flip LLP", "we", "us"
              or "our"). By accessing and using the Mobile Application and
              Services, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Disclaimer. If you are
              entering into this Disclaimer on behalf of a business or other
              legal entity, you represent that you have the authority to bind
              such entity to this Disclaimer, in which case the terms "User",
              "you" or "your" shall refer to such entity. If you do not have
              such authority, or if you do not agree with the terms of this
              Disclaimer, you must not accept this Disclaimer and may not access
              and use the Mobile Application and Services. You acknowledge that
              this Disclaimer is a contract between you and Let's Flip LLP, even
              though it is electronic and is not physically signed by you, and
              it governs your use of the Mobile Application and Services.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Representation
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Any views or opinions represented in the Mobile Application belong
              solely to the content creators and do not represent those of
              people, institutions or organizations that Let's Flip LLP or
              creators may or may not be associated with in professional or
              personal capacity, unless explicitly stated. Any views or opinions
              are not intended to malign any religion, ethnic group, club,
              organization, company, or individual.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Content and postings
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You may print or copy any part of the Mobile Application and
              Services for your personal or non-commercial use.<br></br>
              <br></br>
              You may submit new content in the Mobile Application. By uploading
              or otherwise making available any information to Let's Flip LLP,
              you grant Let's Flip LLP the unlimited, perpetual right to
              distribute, display, publish, reproduce, reuse and copy the
              information contained therein. You may not impersonate any other
              person through the Mobile Application and Services. You may not
              post content that is defamatory, fraudulent, obscene, threatening,
              invasive of another person's privacy rights or that is otherwise
              unlawful. You may not post content that infringes on the
              intellectual property rights of any other person or entity. You
              may not post any content that includes any computer virus or other
              code designed to disrupt, damage, or limit the functioning of any
              computer software or hardware. By submitting or posting content in
              the Mobile Application, you grant Let's Flip LLP the right to edit
              and, if necessary, remove any content at any time and for any
              reason.Compensation and sponsorship<br></br>
              <br></br>
              The Mobile Application and Services may contain forms of
              advertising. Advertising space will always be identified as such.
              Some of the links in the Mobile Application may be "affiliate
              links". This means if you click on the link and purchase an item,
              Let's Flip LLP will receive an affiliate commission.Fitness and
              medical disclaimer<br></br>
              <br></br>
              The information available in the Mobile Application is for general
              health information only and is not intended to be a substitute for
              professional medical advice, diagnosis or treatment. You should
              not rely exclusively on information provided in the Mobile
              Application for your health needs. All specific medical questions
              should be presented to your own health care provider and you
              should seek medical advice regarding your health and before
              starting any nutrition, weight loss or any other type of workout
              program.<br></br>
              <br></br>
              If you choose to use the information available in the Mobile
              Application without prior consultation with and consent of your
              physician, you are agreeing to accept full responsibility for your
              decisions and agreeing to hold harmless Let's Flip LLP, its
              agents, employees, contractors, and any affiliated companies from
              any liability with respect to injury or illness to you or your
              property arising out of or connected with your use of this
              information.<br></br>
              <br></br>
              There may be risks associated with participating in activities
              presented in the Mobile Application for people in good or poor
              health or with pre-existing physical or mental health conditions.
              If you choose to participate in these risks, you do so of your own
              free will and accord, knowingly and voluntarily assuming all risks
              associated with such activities.<br></br>
              <br></br>
              The results obtained from the information available in the Mobile
              Application may vary, and will be based on your individual
              background, physical health, previous experience, capacity,
              ability to act, motivation and other variables. There are no
              guarantees concerning the level of success you may experience.Not
              legal advice<br></br>
              <br></br>
              The information provided in the Mobile Application is for general
              information purposes only and is not an alternative to legal
              advice from your lawyer, other professional services provider, or
              expert. It is not intended to provide legal advice or opinions of
              any kind. You should not act, or refrain from acting, based solely
              upon the information provided in the Mobile Application without
              first seeking appropriate legal or other professional advice. If
              you have any specific questions about any legal matter, you should
              consult your lawyer, other professional services provider, or
              expert. You should never delay seeking legal advice, disregard
              legal advice, or commence or discontinue any legal action because
              of the information in the Mobile Application.<br></br>
              <br></br>
              The information in the Mobile Application is provided for your
              convenience only. This information may have no evidentiary value
              and should be checked against official sources before it is used
              for any purposes. It is your responsibility to determine whether
              this information is admissible in a given judicial or
              administrative proceeding and whether there are any other
              evidentiary or filing requirements. Your use of this information
              is at your own risk.Not financial advice<br></br>
              <br></br>
              The information in the Mobile Application is provided for your
              convenience only and is not intended to be treated as financial,
              investment, tax, or other advice. Nothing contained in the Mobile
              Application constitutes a solicitation, recommendation,
              endorsement, or offer by Let's Flip LLP, its agents, employees,
              contractors, and any affiliated companies to buy or sell any
              securities or other financial instruments.<br></br>
              <br></br>
              All content on this site is the information of a general nature
              and does not address the circumstances of any particular
              individual or entity. Nothing in the Mobile Application
              constitutes professional and/or financial advice, nor does any
              information in the Mobile Application constitute a comprehensive
              or complete statement of the matters discussed or the law relating
              thereto. You alone assume the sole responsibility of evaluating
              the merits and risks associated with the use of any information or
              other content in the Mobile Application before making any
              decisions based on such information. You agree not to hold Let's
              Flip LLP, its agents, employees, contractors, and any affiliated
              companies liable for any possible claim for damages arising from
              any decision you make based on the information made available to
              you through the Website.Not investment advice<br></br>
              <br></br>
              All investments are highly speculative in nature and involve
              substantial risk of loss. We encourage everyone to invest very
              carefully. We also encourage investors to get personal advice from
              your professional investment advisor and to make independent
              investigations before acting on information found in the Mobile
              Application. We do not in any way whatsoever warrant or guarantee
              the success of any action you take in reliance on statements or
              information available in the Mobile Application.<br></br>
              <br></br>
              Past performance is not necessarily indicative of future results.
              All investments carry significant risk and all investment
              decisions of an individual remain the specific responsibility of
              that individual. There is no guarantee that systems, indicators,
              or signals will result in profits or that they will not result in
              full or partial losses. All investors are advised to fully
              understand all risks associated with any kind of investing they
              choose to do.Reviews and testimonials<br></br>
              <br></br>
              Testimonials are received in various forms through a variety of
              submission methods. They are individual experiences, reflecting
              experiences of those who have used the Mobile Application and
              Services in some way or another. However, they are individual
              results and results do vary. We do not claim that they are typical
              results that consumers will generally achieve. The testimonials
              are not necessarily representative of all of those who will use
              Mobile Application and Services, and Let's Flip LLP is not
              responsible for the opinions or comments available in the Mobile
              Application, and does not necessarily share them. People providing
              testimonials in the Mobile Application may have been compensated
              with free products or discounts for use of their experiences. All
              opinions expressed are strictly the views of the reviewers.
              <br></br>
              <br></br>
              The testimonials displayed are given verbatim except for
              grammatical or typing error corrections. Some testimonials may
              have been edited for clarity, or shortened in cases where the
              original testimonial included extraneous information of no
              relevance to the general public. Testimonials may be reviewed for
              authenticity before they are available for public
              viewing.Indemnification and warranties<br></br>
              <br></br>
              While we have made every attempt to ensure that the information
              contained in the Mobile Application is correct, Let's Flip LLP is
              not responsible for any errors or omissions, or for the results
              obtained from the use of this information. All information in the
              Mobile Application is provided "as is", with no guarantee of
              completeness, accuracy, timeliness or of the results obtained from
              the use of this information, and without warranty of any kind,
              express or implied. In no event will Let's Flip LLP, or its
              partners, employees or agents, be liable to you or anyone else for
              any decision made or action taken in reliance on the information
              in the Mobile Application, or for any consequential, special or
              similar damages, even if advised of the possibility of such
              damages.<br></br>
              <br></br>
              Furthermore, as with any business, your results may vary and will
              be based on your individual capacity, experience, expertise, and
              level of desire. There are no guarantees concerning the level of
              success you may experience. There is no guarantee that you will
              make any income at all and you accept the risk that the earnings
              and income statements differ by individual. Each individual’s
              success depends on his or her background, dedication, desire and
              motivation. The use of the information in the Mobile Application
              and Services should be based on your own due diligence and you
              agree that Let's Flip LLP is not liable for any success or failure
              of your business that is directly or indirectly related to the
              purchase and use of our information, products, and services
              reviewed or advertised in the Mobile Application. Information
              contained in the Mobile Application are subject to change at any
              time and without warning.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Changes and amendments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We reserve the right to modify this Disclaimer or its terms
              relating to the Mobile Application and Services at any time,
              effective upon posting of an updated version of this Disclaimer in
              the Mobile Application. When we do, we will revise the updated
              date at the bottom of this page. Continued use of the Mobile
              Application and Services after any such changes shall constitute
              your consent to such changes.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Acceptance of this disclaimer
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You acknowledge that you have read this Disclaimer and agree to
              all its terms and conditions. By accessing and using the Mobile
              Application and Services you agree to be bound by this Disclaimer.
              If you do not agree to abide by the terms of this Disclaimer, you
              are not authorized to access or use the Mobile Application and
              Services.
            </p>
          </div>

          <div
            onClick={() => setpolicy4(!policy4)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              DMCA policy for Let's Fl!p
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy4 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy4 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              DMCA policy
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              This Digital Millennium Copyright Act policy ("Policy") applies to
              the "Let's Flp" mobile application ("Mobile Application" or
              "Service") and any of its related products and services
              (collectively, "Services") and outlines how Let's Flip LLP ("Let's
              Flip LLP", "we", "us" or "our") addresses copyright infringement
              notifications and how you ("you" or "your") may submit a copyright
              infringement complaint.<br></br>
              <br></br>
              Protection of intellectual property is of utmost importance to us
              and we ask our users and their authorized agents to do the same.
              It is our policy to expeditiously respond to clear notifications
              of alleged copyright infringement that comply with the United
              States Digital Millennium Copyright Act ("DMCA") of 1998, the text
              of which can be found at the U.S. Copyright Office website.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              What to consider before submitting a copyright complaint
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Before submitting a copyright complaint to us, consider whether
              the use could be considered fair use. Fair use states that brief
              excerpts of copyrighted material may, under certain circumstances,
              be quoted verbatim for purposes such as criticism, news reporting,
              teaching, and research, without the need for permission from or
              payment to the copyright holder. If you have considered fair use,
              and you still wish to continue with a copyright complaint, you may
              want to first reach out to the user in question to see if you can
              resolve the matter directly with the user.<br></br>
              Please note that if you are unsure whether the material you are
              reporting is in fact infringing, you may wish to contact an
              attorney before filing a notification with us.<br></br>
              We may, at our discretion or as required by law, share a copy of
              your notification or counter-notification with the account holder
              engaged in the allegedly infringing activity or for publication.
              If you are concerned about your information being forwarded, you
              may wish to hire an agent to report infringing material for you.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Notifications of infringement
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Filing a DMCA complaint is the start of a pre-defined legal
              process. Your complaint will be reviewed for accuracy, validity,
              and completeness. Our response may include the removal or
              restriction of access to allegedly infringing material as well as
              a permanent termination of repeat infringers’ accounts. A backup
              of the terminated account’s data may be requested, however it may
              be subject to certain penalty fees imposed. The final penalty fee
              will be determined by the severity and frequency of the
              violations.<br></br>
              If we remove or restrict access to materials or terminate an
              account in response to a Notification of alleged infringement, we
              will make a good faith effort to contact the affected user with
              information concerning the removal or restriction of access, which
              may include a full copy of your Notification (including your name,
              address, phone, and email address), along with instructions for
              filing a counter-notification.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Counter-notifications
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              A user who receives a copyright infringement Notification may make
              a counter-Notification pursuant to sections 512(g)(2) and (3) of
              the US Copyright Act. If you receive a copyright infringement
              Notification, it means that the material described in the
              Notification has been removed from our Services or access to the
              material has been restricted. Please take the time to read through
              the Notification, which includes information on the Notification
              we received.<br></br>
              Please note that if you are not sure whether certain material
              infringes the copyrights of others or that the material or
              activity was removed or restricted by mistake or
              misidentification, you may wish to contact an attorney before
              filing a counter-notification.<br></br>
              Notwithstanding anything to the contrary contained in any portion
              of this Policy, Let's Flip LLP reserves the right to take no
              action upon receipt of a counter-notification. If we receive a
              counter-notification that complies with the terms of 17 U.S.C. §
              512(g), we may forward it to the person who filed the original
              Notification.<br></br>
              The process described in this Policy does not limit our ability to
              pursue any other remedies we may have to address suspected
              infringement.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Changes and amendments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We reserve the right to modify this Policy or its terms relating
              to the Mobile Application and Services at any time, effective upon
              posting of an updated version of this Policy in the Mobile
              Application. When we do, we will revise the updated date at the
              bottom of this page.
            </p>
          </div>

          <div
            onClick={() => setpolicy5(!policy5)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              Refund policy for Let's Fl!p
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy5 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy5 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Refund policy
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Since the Mobile Application offers non-tangible, irrevocable
              goods we do not provide refunds after the product is purchased,
              which you acknowledge prior to purchasing any product in the
              Mobile Application. Please make sure that you've carefully read
              service description before making a purchase.
            </p>
          </div>

          <div
            onClick={() => setpolicy6(!policy6)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              Subscription term and condition for 1 year
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy6 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy6 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Generally
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Let's Flip may offer products and services for purchase on the App
              (“In-App Purchase”). If you choose to make an In-App Purchase, you
              acknowledge and agree that additional terms, disclosed to you at
              the point of purchase, may apply, and that such additional terms
              are incorporated herein by reference.<br></br>
              You may make an In-App Purchase through the following payment
              methods (“Payment Method”): (a) making a purchase through a
              third-party platform such as the Apple App Store and Google Play
              Store (“Third Party Store”). Once you have made an In-App
              Purchase, you authorise us to charge your chosen Payment Method.
              If payment is not received by us from your chosen Payment Method,
              you agree to promptly pay all amounts due upon demand by us.
              <br></br>
              Subscriptions and Auto-Renewal: Let's Flip may offer some services
              as automatically-renewing subscriptions, e.g., a year subscription
              (“Premium Services”). The two models will be (a) Private classroom
              upgrade for 1 year and (b) Inapp purchase of Master Classrooms. IF
              YOU PURCHASE AN AUTOMATICALLY RENEWING SUBSCRIPTION, YOUR
              SUBSCRIPTION WILL RENEW AT THE END OF THE PERIOD, UNLESS YOU
              CANCEL, AT LET’S FLIP’S THEN-CURRENT PRICE FOR SUCH SUBSCRIPTIONS.
              To avoid charges for a new subscription period, you must cancel,
              as described below, before the end of the then-current
              subscription period. Deleting your account or deleting the
              application from your device does not cancel your subscription.
              You will be given notice of changes in the pricing of the Premium
              Services to which you have subscribed and an opportunity to
              cancel. If Let's Flip changes these prices and you do not cancel
              your subscription, you agree that you will be charged at Let's
              Flip’s then-current pricing for subscription.<br></br>
              Cancelling Subscriptions. If you purchased a subscription directly
              from Let's Flip, you may cancel or change your Payment Method via
              the payment settings option under your profile. If you purchased a
              subscription through a Third Party Store, such as the Apple App
              Store or the Google Play Store, you will need to access your
              account with that Third Party Store and follow instructions to
              change or cancel your subscription. If you cancel your
              subscription, you may use your subscription until the end of the
              period you last paid for, but (i) you will not (except as set
              forth in the subsection entitled “Refunds” below) be eligible for
              a prorated refund, (ii) your subscription will not be renewed when
              that period expires and (iii) you will then no longer be able to
              use the Premium Services or In-App Purchases enabled by your
              subscription.<br></br>
              Refunds. Generally, all charges for purchases are nonrefundable,
              and there are no refunds or credits for partially used periods.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              To request a refund:
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              In addition to canceling, you must request a refund to receive
              one. If you subscribed using your Apple ID, refunds are handled by
              Apple, not Let's Flip. To request a refund, go to iTunes, click on
              your Apple ID, select “Purchase history,” find the transaction and
              hit “Report Problem”. You can also submit a request at
              https://getsupport.apple.com.
            </p>
          </div>

          <div
            onClick={() => setpolicy7(!policy7)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              Terms and Conditions for Let's Flip
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy7 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy7 ? "flex flex-col" : "hidden"}>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Terms and conditions
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              These terms and conditions ("Agreement") set forth the general
              terms and conditions of your use of the "Let's Flp" mobile
              application ("Mobile Application" or "Service") and any of its
              related products and services (collectively, "Services"). This
              Agreement is legally binding between you ("User", "you" or "your")
              and Let's Flip LLP ("Let's Flip LLP", "we", "us" or "our"). By
              accessing and using the Mobile Application and Services, you
              acknowledge that you have read, understood, and agree to be bound
              by the terms of this Agreement. If you are entering into this
              Agreement on behalf of a business or other legal entity, you
              represent that you have the authority to bind such entity to this
              Agreement, in which case the terms "User", "you" or "your" shall
              refer to such entity. If you do not have such authority, or if you
              do not agree with the terms of this Agreement, you must not accept
              this Agreement and may not access and use the Mobile Application
              and Services. You acknowledge that this Agreement is a contract
              between you and Let's Flip LLP, even though it is electronic and
              is not physically signed by you, and it governs your use of the
              Mobile Application and Services.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Accounts and membership
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              If you create an account in the Mobile Application, you are
              responsible for maintaining the security of your account and you
              are fully responsible for all activities that occur under the
              account and any other actions taken in connection with it. We may
              monitor and review new accounts before you may sign in and start
              using the Services. Providing false contact information of any
              kind may result in the termination of your account. You must
              immediately notify us of any unauthorized uses of your account or
              any other breaches of security. We will not be liable for any acts
              or omissions by you, including any damages of any kind incurred as
              a result of such acts or omissions. We may suspend, disable, or
              delete your account (or any part thereof) if we determine that you
              have violated any provision of this Agreement or that your conduct
              or content would tend to damage our reputation and goodwill. If we
              delete your account for the foregoing reasons, you may not
              re-register for our Services. We may block your email address and
              Internet protocol address to prevent further registration.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              User content
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We do not own any data, information or material (collectively,
              "Content") that you submit in the Mobile Application in the course
              of using the Service. You shall have sole responsibility for the
              accuracy, quality, integrity, legality, reliability,
              appropriateness, and intellectual property ownership or right to
              use of all submitted Content. We may monitor and review the
              Content in the Mobile Application submitted or created using our
              Services by you. You grant us permission to access, copy,
              distribute, store, transmit, reformat, display and perform the
              Content of your user account solely as required for the purpose of
              providing the Services to you. Without limiting any of those
              representations or warranties, we have the right, though not the
              obligation, to, in our own sole discretion, refuse or remove any
              Content that, in our reasonable opinion, violates any of our
              policies or is in any way harmful or objectionable. You also grant
              us the license to use, reproduce, adapt, modify, publish or
              distribute the Content created by you or stored in your user
              account for commercial, marketing or any similar purpose.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Billing and payments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You shall pay all fees or charges to your account in accordance
              with the fees, charges, and billing terms in effect at the time a
              fee or charge is due and payable. If auto-renewal is enabled for
              the Services you have subscribed for, you will be charged
              automatically in accordance with the term you selected. Sensitive
              and private data exchange happens over a SSL secured communication
              channel and is encrypted and protected with digital signatures,
              and the Mobile Application and Services are also in compliance
              with PCI vulnerability standards in order to create as secure of
              an environment as possible for Users. Scans for malware are
              performed on a regular basis for additional security and
              protection. If, in our judgment, your purchase constitutes a
              high-risk transaction, we will require you to provide us with a
              copy of your valid government-issued photo identification, and
              possibly a copy of a recent bank statement for the credit or debit
              card used for the purchase. We reserve the right to change
              products and product pricing at any time. We also reserve the
              right to refuse any order you place with us. We may, in our sole
              discretion, limit or cancel quantities purchased per person, per
              household or per order. These restrictions may include orders
              placed by or under the same customer account, the same credit
              card, and/or orders that use the same billing and/or shipping
              address. In the event that we make a change to or cancel an order,
              we may attempt to notify you by contacting the e-mail and/or
              billing address/phone number provided at the time the order was
              made.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Accuracy of information
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Occasionally there may be information in the Mobile Application
              that contains typographical errors, inaccuracies or omissions that
              may relate to promotions and offers. We reserve the right to
              correct any errors, inaccuracies or omissions, and to change or
              update information or cancel orders if any information in the
              Mobile Application or Services is inaccurate at any time without
              prior notice (including after you have submitted your order). We
              undertake no obligation to update, amend or clarify information in
              the Mobile Application including, without limitation, pricing
              information, except as required by law. No specified update or
              refresh date applied in the Mobile Application should be taken to
              indicate that all information in the Mobile Application or
              Services has been modified or updated.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Third party services
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              If you decide to enable, access or use third party services, be
              advised that your access and use of such other services are
              governed solely by the terms and conditions of such other
              services, and we do not endorse, are not responsible or liable
              for, and make no representations as to any aspect of such other
              services, including, without limitation, their content or the
              manner in which they handle data (including your data) or any
              interaction between you and the provider of such other services.
              You irrevocably waive any claim against Let's Flip LLP with
              respect to such other services. Let's Flip LLP is not liable for
              any damage or loss caused or alleged to be caused by or in
              connection with your enablement, access or use of any such other
              services, or your reliance on the privacy practices, data security
              processes or other policies of such other services. You may be
              required to register for or log into such other services on their
              respective platforms. By enabling any other services, you are
              expressly permitting Let's Flip LLP to disclose your data as
              necessary to facilitate the use or enablement of such other
              service.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Backups
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We perform regular backups of the Content and will do our best to
              ensure completeness and accuracy of these backups. In the event of
              the hardware failure or data loss we will restore backups
              automatically to minimize the impact and downtime.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Advertisements
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              During your use of the Mobile Application and Services, you may
              enter into correspondence with or participate in promotions of
              advertisers or sponsors showing their goods or services through
              the Mobile Application and Services. Any such activity, and any
              terms, conditions, warranties or representations associated with
              such activity, is solely between you and the applicable third
              party. We shall have no liability, obligation or responsibility
              for any such correspondence, purchase or promotion between you and
              any such third party.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Links to other resources
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Although the Mobile Application and Services may link to other
              resources (such as websites, mobile applications, etc.), we are
              not, directly or indirectly, implying any approval, association,
              sponsorship, endorsement, or affiliation with any linked resource,
              unless specifically stated herein. Some of the links in the Mobile
              Application may be "affiliate links". This means if you click on
              the link and purchase an item, Let's Flip LLP will receive an
              affiliate commission. We are not responsible for examining or
              evaluating, and we do not warrant the offerings of, any businesses
              or individuals or the content of their resources. We do not assume
              any responsibility or liability for the actions, products,
              services, and content of any other third parties. You should
              carefully review the legal statements and other conditions of use
              of any resource which you access through a link in the Mobile
              Application and Services. Your linking to any other off-site
              resources is at your own risk.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Prohibited uses
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              In addition to other terms as set forth in the Agreement, you are
              prohibited from using the Mobile Application and Services or
              Content: <br></br>(a) for any unlawful purpose; <br></br>(b) to
              solicit others to perform or participate in any unlawful acts;{" "}
              <br></br>(c) to violate any international, federal, provincial or
              state regulations, rules, laws, or local ordinances; <br></br>(d)
              to infringe upon or violate our intellectual property rights or
              the intellectual property rights of others; <br></br>(e) to
              harass, abuse, insult, harm, defame, slander, disparage,
              intimidate, or discriminate based on gender, sexual orientation,
              religion, ethnicity, race, age, national origin, or disability;{" "}
              <br></br>(f) to submit false or misleading information; <br></br>
              (g) to upload or transmit viruses or any other type of malicious
              code that will or may be used in any way that will affect the
              functionality or operation of the Mobile Application and Services,
              third party products and services, or the Internet; <br></br>(h)
              to spam, phish, pharm, pretext, spider, crawl, or scrape;{" "}
              <br></br>(i) for any obscene or immoral purpose; or <br></br>(j)
              to interfere with or circumvent the security features of the
              Mobile Application and Services, third party products and
              services, or the Internet. We reserve the right to terminate your
              use of the Mobile Application and Services for violating any of
              the prohibited uses.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Intellectual property rights
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              "Intellectual Property Rights" means all present and future rights
              conferred by statute, common law or equity in or in relation to
              any copyright and related rights, trademarks, designs, patents,
              inventions, goodwill and the right to sue for passing off, rights
              to inventions, rights to use, and all other intellectual property
              rights, in each case whether registered or unregistered and
              including all applications and rights to apply for and be granted,
              rights to claim priority from, such rights and all similar or
              equivalent rights or forms of protection and any other results of
              intellectual activity which subsist or will subsist now or in the
              future in any part of the world. This Agreement does not transfer
              to you any intellectual property owned by Let's Flip LLP or third
              parties, and all rights, titles, and interests in and to such
              property will remain (as between the parties) solely with Let's
              Flip LLP. All trademarks, service marks, graphics and logos used
              in connection with the Mobile Application and Services, are
              trademarks or registered trademarks of Let's Flip LLP or its
              licensors. Other trademarks, service marks, graphics and logos
              used in connection with the Mobile Application and Services may be
              the trademarks of other third parties. Your use of the Mobile
              Application and Services grants you no right or license to
              reproduce or otherwise use any of Let's Flip LLP or third party
              trademarks.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Disclaimer of warranty
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You agree that such Service is provided on an "as is" and "as
              available" basis and that your use of the Mobile Application and
              Services is solely at your own risk. We expressly disclaim all
              warranties of any kind, whether express or implied, including but
              not limited to the implied warranties of merchantability, fitness
              for a particular purpose and non-infringement. We make no warranty
              that the Services will meet your requirements, or that the Service
              will be uninterrupted, timely, secure, or error-free; nor do we
              make any warranty as to the results that may be obtained from the
              use of the Service or as to the accuracy or reliability of any
              information obtained through the Service or that defects in the
              Service will be corrected. You understand and agree that any
              material and/or data downloaded or otherwise obtained through the
              use of Service is done at your own discretion and risk and that
              you will be solely responsible for any damage or loss of data that
              results from the download of such material and/or data. We make no
              warranty regarding any goods or services purchased or obtained
              through the Service or any transactions entered into through the
              Service unless stated otherwise. No advice or information, whether
              oral or written, obtained by you from us or through the Service
              shall create any warranty not expressly made herein.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Limitation of liability
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              To the fullest extent permitted by applicable law, in no event
              will Let's Flip LLP, its affiliates, directors, officers,
              employees, agents, suppliers or licensors be liable to any person
              for any indirect, incidental, special, punitive, cover or
              consequential damages (including, without limitation, damages for
              lost profits, revenue, sales, goodwill, use of content, impact on
              business, business interruption, loss of anticipated savings, loss
              of business opportunity) however caused, under any theory of
              liability, including, without limitation, contract, tort,
              warranty, breach of statutory duty, negligence or otherwise, even
              if the liable party has been advised as to the possibility of such
              damages or could have foreseen such damages. To the maximum extent
              permitted by applicable law, the aggregate liability of Let's Flip
              LLP and its affiliates, officers, employees, agents, suppliers and
              licensors relating to the services will be limited to an amount
              greater of one dollar or any amounts actually paid in cash by you
              to Let's Flip LLP for the prior one month period prior to the
              first event or occurrence giving rise to such liability. The
              limitations and exclusions also apply if this remedy does not
              fully compensate you for any losses or fails of its essential
              purpose.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Indemnification
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You agree to indemnify and hold Let's Flip LLP and its affiliates,
              directors, officers, employees, agents, suppliers and licensors
              harmless from and against any liabilities, losses, damages or
              costs, including reasonable attorneys' fees, incurred in
              connection with or arising from any third party allegations,
              claims, actions, disputes, or demands asserted against any of them
              as a result of or relating to your Content, your use of the Mobile
              Application and Services or any willful misconduct on your part.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Severability
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              All rights and restrictions contained in this Agreement may be
              exercised and shall be applicable and binding only to the extent
              that they do not violate any applicable laws and are intended to
              be limited to the extent necessary so that they will not render
              this Agreement illegal, invalid or unenforceable. If any provision
              or portion of any provision of this Agreement shall be held to be
              illegal, invalid or unenforceable by a court of competent
              jurisdiction, it is the intention of the parties that the
              remaining provisions or portions thereof shall constitute their
              agreement with respect to the subject matter hereof, and all such
              remaining provisions or portions thereof shall remain in full
              force and effect.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Dispute resolution
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              The formation, interpretation, and performance of this Agreement
              and any disputes arising out of it shall be governed by the
              substantive and procedural laws of Singapore without regard to its
              rules on conflicts or choice of law and, to the extent applicable,
              the laws of Singapore. The exclusive jurisdiction and venue for
              actions related to the subject matter hereof shall be the courts
              located in Singapore, and you hereby submit to the personal
              jurisdiction of such courts. You hereby waive any right to a jury
              trial in any proceeding arising out of or related to this
              Agreement. The United Nations Convention on Contracts for the
              International Sale of Goods does not apply to this Agreement.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Assignment
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You may not assign, resell, sub-license or otherwise transfer or
              delegate any of your rights or obligations hereunder, in whole or
              in part, without our prior written consent, which consent shall be
              at our own sole discretion and without obligation; any such
              assignment or transfer shall be null and void. We are free to
              assign any of its rights or obligations hereunder, in whole or in
              part, to any third party as part of the sale of all or
              substantially all of its assets or stock or as part of a merger.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Changes and amendments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              We reserve the right to modify this Agreement or its terms
              relating to the Mobile Application and Services at any time,
              effective upon posting of an updated version of this Agreement in
              the Mobile Application. When we do, we will post a notification in
              the Mobile Application. Continued use of the Mobile Application
              and Services after any such changes shall constitute your consent
              to such changes.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Acceptance of these terms
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You acknowledge that you have read this Agreement and agree to all
              its terms and conditions. By accessing and using the Mobile
              Application and Services you agree to be bound by this Agreement.
              If you do not agree to abide by the terms of this Agreement, you
              are not authorized to access or use the Mobile Application and
              Services.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Contacting us
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              If you would like to contact us to understand more about this
              Agreement or wish to contact us concerning any matter relating to
              it, you may send an email to letsflipapplication@gmail.com. This
              document was last updated on May 5, 2021
            </p>
          </div>

          <div
            onClick={() => setpolicy8(!policy8)}
            className="flex flex-row justify-between pr-[3vw]"
          >
            <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]">
              User Generated Content
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2vw]"
            >
              {policy8 ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              )}
            </svg>
          </div>

          <div className={policy8 ? "flex flex-col" : "hidden"}>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              If you are a user having your usual residence in the EEA, the
              United Kingdom or Switzerland, this EULA shall apply. If you are a
              user having your usual residence in India, this EULA shall apply.
              If you are not in the US, EEA, the United Kingdom, Switzerland or
              India, this EULA shall apply. There may also be jurisdiction
              specific provisions for certain countries or regions. Please refer
              to your local EULA for more information.
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              User-Generated Content
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Users of the Services may be permitted to upload, post or transmit
              (such as via a stream) or otherwise make available content through
              the Services including, without limitation, any text, photographs,
              user videos, sound recordings and the musical works embodied
              therein, including videos that incorporate locally stored sound
              recordings from your personal music library and ambient noise
              (“User Content”). Users of the Services may also extract all or
              any portion of User Content created by another user to produce
              additional User Content, including collaborative User Content with
              other users, that combine and intersperse User Content generated
              by more than one user. Users of the Services may also overlay
              music, graphics, stickers, Virtual Items (as defined and further
              explained Virtual Items Policy) and other elements provided by
              Let's Flip(“Let's Flip Elements”) onto this User Content and
              transmit this User Content through the Services. The information
              and materials in the User Content, including User Content that
              includes Let's Flip Elements, have not been verified or approved
              by us. The views expressed by other users on the Services
              (including through use of the virtual gifts) do not represent our
              views or values. <br></br>
              <br></br>
              Whenever you access or use a feature that allows you to upload or
              transmit User Content through the Services (including via certain
              third party social media platforms such as Instagram, Facebook,
              YouTube, Twitter), or to make contact with other users of the
              Services, you must comply with the standards set out at “Your
              Access to and Use of Our Services” above. You may also choose to
              upload or transmit your User Content, including User Content that
              includes Let's Flip Elements, on sites or platforms hosted by
              third parties. If you decide to do this, you must comply with
              their content guidelines as well as with the standards set out at
              “Your Access to and Use of Our Services” above. As noted above,
              these features may not be available to all users of the Services,
              and we have no liability to you for limiting your right to certain
              features of the Services.<br></br>
              <br></br>
              You warrant that any such contribution does comply with those
              standards, and you will be liable to us and indemnify us for any
              breach of that warranty. This means you will be responsible for
              any loss or damage we suffer as a result of your breach of
              warranty.<br></br>
              <br></br>
              Any User Content will be considered non-confidential and
              non-proprietary. You must not post any User Content on or through
              the Services or transmit to us any User Content that you consider
              to be confidential or proprietary. When you submit User Content
              through the Services, you agree and represent that you own that
              User Content, or you have received all necessary permissions,
              clearances from, or are authorised by, the owner of any part of
              the content to submit it to the Services, to transmit it from the
              Services to other third party platforms, and/or adopt any third
              party content.<br></br>
              <br></br>
              If you only own the rights in and to a sound recording, but not to
              the underlying musical works embodied in such sound recordings,
              then you must not post such sound recordings to the Services
              unless you have all permissions, clearances from, or are
              authorised by, the owner of any part of the content to submit it
              to the Services<br></br>
              <br></br>
              You or the owner of your User Content still own the copyright in
              User Content sent to us, but by submitting User Content via the
              Services, you hereby grant us an unconditional irrevocable,
              non-exclusive, royalty-free, fully transferable, perpetual
              worldwide licence to use, modify, adapt, reproduce, make
              derivative works of, publish and/or transmit, and/or distribute
              and to authorise other users of the Services and other
              third-parties to view, access, use, download, modify, adapt,
              reproduce, make derivative works of, publish and/or transmit your
              User Content in any format and on any platform, either now known
              or hereinafter invented.<br></br>
              <br></br>
              You further grant us a royalty-free license to use your user name,
              image, voice, and likeness to identify you as the source of any of
              your User Content; provided, however, that your ability to provide
              an image, voice, and likeness may be subject to limitations due to
              age restrictions.<br></br>
              <br></br>
              Through-To-The-Audience Rights. All of the rights you grant in
              your User Content in these Terms are provided on a
              through-to-the-audience basis, meaning the owners or operators of
              third party services will not have any separate liability to you
              or any other third party for User Content posted or used on such
              third party service via the Services.<br></br>
              <br></br>
              Waiver of Rights to User Content. By posting User Content to or
              through the Services, you waive any rights to prior inspection or
              approval of any marketing or promotional materials related to such
              User Content. You also waive any and all rights of privacy,
              publicity, or any other rights of a similar nature in connection
              with your User Content, or any portion thereof. To the extent any
              moral rights are not transferable or assignable, you hereby waive
              and agree never to assert any and all moral rights, or to support,
              maintain or permit any action based on any moral rights that you
              may have in or with respect to any User Content you Post to or
              through the Services.<br></br>
              <br></br>
              We also have the right to disclose your identity to any third
              party who is claiming that any User Content posted or uploaded by
              you to our Services constitutes a violation of their intellectual
              property rights, or of their right to privacy.<br></br>
              <br></br>
              We, or authorised third parties, reserve the right to cut, crop,
              edit or refuse to publish, your content at our or their sole
              discretion. We have the right to remove, disallow, block or delete
              any posting you make on our Services if, in our opinion, your post
              does not comply with the content standards set out at “Your Access
              to and Use of Our Services”above. In addition, we have the right –
              but not the obligation – in our sole discretion to remove,
              disallow, block or delete any User Content (i) that we consider to
              violate these Terms, or (ii) in response to complaints from other
              users or third parties, with or without notice and without any
              liability to you. As a result, we recommend that you save copies
              of any User Content that you post to the Services on your personal
              device(s) in the event that you want to ensure that you have
              permanent access to copies of such User Content. We do not
              guarantee the accuracy, integrity, appropriateness or quality of
              any User Content, and under no circumstances will we be liable in
              any way for any User Content.<br></br>
              <br></br>
              You control whether your User Content is made publicly available
              on the Services to all other users of the Services or only
              available to people you approve. To restrict access to your User
              Content, you should select the privacy setting available within
              the Platform.<br></br>
              <br></br>
              We accept no liability in respect of any content submitted by
              users and published by us or by authorised third parties. If you
              wish to file a complaint about information or materials uploaded
              by other users, contact us at: letsflipapplication@gmail.com.
              <br></br>
              <br></br>
              Let's Flip takes reasonable measures to expeditiously remove from
              our Services any infringing material that we become aware of.It is
              Let's Flip's policy, in appropriate circumstances and at its
              discretion, to disable or terminate the accounts of users of the
              Services who repeatedly infringe copyrights or intellectual
              property rights of others.<br></br>
              <br></br>
              While our own staff is continually working to develop and evaluate
              our own product ideas and features, we pride ourselves on paying
              close attention to the interests, feedback, comments, and
              suggestions we receive from the user community. If you choose to
              contribute by sending us or our employees any ideas for products,
              services, features, modifications, enhancements, content,
              refinements, technologies, content offerings (such as audio,
              visual, games, or other types of content), promotions, strategies,
              or product/feature names, or any related documentation, artwork,
              computer code, diagrams, or other materials (collectively
              “Feedback”), then regardless of what your accompanying
              communication may say, the following terms will apply, so that
              future misunderstandings can be avoided. Accordingly, by sending
              Feedback to us, you agree that:
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Your Feedback
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              Let's Flip has no obligation to review, consider, or implement
              your Feedback, or to return to you all or part of any Feedback for
              any reason;<br></br>
              <br></br>
              Feedback is provided on a non-confidential basis, and we are not
              under any obligation to keep any Feedback you send confidential or
              to refrain from using or disclosing it in any way; and You
              irrevocably grant us perpetual and unlimited permission to
              reproduce, distribute, create derivative works of, modify,
              publicly perform (including on a through-to-the-audience basis),
              communicate to the public, make available, publicly display, and
              otherwise use and exploit the Feedback and derivatives thereof for
              any purpose and without restriction, free of charge and without
              attribution of any kind, including by making, using, selling,
              offering for sale, importing, and promoting commercial products
              and services that incorporate or embody Feedback, whether in whole
              or in part, and whether as provided or as modified.<br></br>
              <br></br>
              Let's Flip has no obligation to review, consider, or implement
              your Feedback, or to return to you all or part of any Feedback for
              any reason; Feedback is provided on a non-confidential basis, and
              we are not under any obligation to keep any Feedback you send
              confidential or to refrain from using or disclosing it in any way;
              and You irrevocably grant us perpetual and unlimited permission to
              reproduce, distribute, create derivative works of, modify,
              publicly perform (including on a through-to-the-audience basis),
              communicate to the public, make available, publicly display, and
              otherwise use and exploit the Feedback and derivatives thereof for
              any purpose and without restriction, free of charge and without
              attribution of any kind, including by making, using, selling,
              offering for sale, importing, and promoting commercial products
              and services that incorporate or embody Feedback, whether in whole
              or in part, and whether as provided or as modified.
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Report
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              To keep Let’s Flip fun, welcoming and safe for everyone, we
              encourage users to report content that they think violates the
              Community Guidelines. Content that does not follow our Community
              Guidelines can be reported any time within the app.<br></br>
              The best way to report abusive content or spam on Let’s Flip
              Application is by using the Report link in the content itself.
              Below are some examples of how you can report content to us.
              Mission content, Classroom content and Profile page with 5
              submitted reports will automatically be hidden for review.
              <br></br>
              Keep in mind that your report is anonymous, except if you’re
              reporting an intellectual property infringement. The account you
              reported won’t see who reported them.
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Reporting of Users Profile
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You can report abusive profile and overall content of user on
              their profile page:
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Let’s Flip app for Android and iPhone
            </h3>
            <ol
              type="1"
              className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed"
            >
              <li>Open the profile in the Let’s Flip app.</li>
              <li>Click the three-dot button</li>
              <li>Tap Report.</li>
              <li>
                Select a reason for why you're reporting the message and then
                tap Submit Report
              </li>
            </ol>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Reporting of Mission Content
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You can report abusive content on this mission:
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Let’s Flip app for Android and iPhone
            </h3>
            <ol
              type="1"
              className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed"
            >
              <li>Open the profile in the Let’s Flip app.</li>
              <li>Click the three-dot button</li>
              <li>Tap Report.</li>
              <li>
                Select a reason for why you're reporting the message and then
                tap Submit Report
              </li>
            </ol>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Reporting of Classroom Content
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              You can report abusive content on this classroom:
            </p>
            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Let’s Flip app for Android and iPhone
            </h3>
            <ol className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed list-decimal">
              <li>Open the profile in the Let’s Flip app.</li>
              <li>Click the three-dot button</li>
              <li>Tap Report.</li>
              <li>
                Select a reason for why you're reporting the message and then
                tap Submit Report If you submit a report to us through our email
                or in the app itself, you'll receive an automated email that
                contains information about your report, including a unique
                report number. You should save this number in case you need to
                contact us about your report. Let’s Flip staff will review the
                report submitted by the user within 48 hours. Sometimes, we
                might respond to your report and ask for more information. If
                you receive a message from our team asking for more information
                about your report, you should respond directly to that message.
                Your response will be received by our team so they can continue
                to look into your report. Please note that we regularly provide
                the person who posted the content with the following information
                about your report:
              </li>
            </ol>
            <ul className="font-montserrat text-[1vw] text-left list-disc pl-[6vw] leading-relaxed">
              <li>Report number</li>
              <li>Rights owner's name</li>
              <li>Email address provided by the reporting party</li>
              <li>Details of the report</li>
              <li>Instructions on how to submit an appeal</li>
              <li>
                The person whose content was removed may contact you with the
                information you provide. For this reason, you may want to
                provide a valid generic business or professional email address.
              </li>
            </ul>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              The staff of Let’s Flip will review the report and take actions
              accordingly.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Blocking of users
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              When you block someone from the Let’s Flip app, you’ll have the
              option to block their account, or to block their account and new
              accounts they may create. People aren't notified when you block
              them.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Likes and comments
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              After you block someone, their likes and comments will be removed
              from your photos and videos. Unblocking someone won't restore
              their previous likes and comments. People that you block can still
              see your likes and comments on posts that were shared by public
              accounts or accounts they follow.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Mentions and tags
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              After you block someone, they won't be able to mention your
              username or tag you. If you block someone and then change your
              username, they won't be able to mention or tag you unless they
              know your new username.
            </p>

            <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]">
              Responses
            </h3>
            <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]">
              After you block someone, you will not be able to see their
              responses on Let's Flip in the public dashboard, and you won't be
              able to message them. If you're in a private classroom with
              someone you've blocked, you'll get a dialog asking whether you
              want to stay in the classroom or leave. If you choose to stay in
              the classroom you'll be able to see responses from the person you
              blocked in the group. After you block someone, they won't be able
              to join a classroom you create if they're logged in to their Let's
              Flip account. If you no longer want to block someone, you can
              unblock them. To report abusive content, harassment or bullying,
              you can do it in the app or reach out to
              letsflipapplication@gmail.com
            </p>
          </div>

          {/* <h2 className="font-montserrat text-[1.5vw] font-semibold text-left py-[0.5vw]"></h2>
          <h3 className="font-montserrat text-[1.2vw] font-semibold text-left py-[0.5vw]"></h3>
          <p className="font-montserrat px-[3vw] text-[1vw] text-left py-[0.75vw]"></p>
          <ul className="font-montserrat text-[1vw] text-left py-[0.75vw] list-disc pl-[6vw] leading-relaxed">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Privacy;
