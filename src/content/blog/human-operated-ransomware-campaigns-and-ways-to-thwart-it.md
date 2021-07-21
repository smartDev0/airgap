---
id: horc
path: /blog/human-operated-ransomware-campaigns
date: 2020-12-09T18:25:47.639Z
title: "Protect Against Human-Operated Ransomware Campaigns "
description: >-
  Human-operated ransomware attacks represent a different level of threat because adversaries adapt to any path of least resistance they find in a compromised network.
author: airgapnetworks
image: ../../images/uploads/hamanoperatinghands.jpg
tags:
  - Ransomware Response
---
Ransomware is one of the most prominent security problems on the internet and one of the top cybercrime methods that organizations face today. Ransomware, a malicious software (malware), can encrypts files on a single PC or network wide. Victims are left with few choices; files can be decrypted after a ransom is paid or files can be recovered from storage backups.

Some ransomware infections start with Phishing, where a user by clicking on an innocent looking email attachment, downloads the malicious payload. Other, much larger ransomware campaigns employ software exploits and flaws, cracked passwords, and additional vulnerabilities to access organizations. Leveraging their weak links such as internet-facing servers or remote-desktop logins. The attackers will stealthily probe the network, discovering any weaknesses, before encrypting all they can.

It is obviously a real problem for businesses, of all sizes, if vital files and documents, networks, or servers are swiftly encrypted and inaccessible. Once a company is compromised with file-encrypting ransomware, criminals will often brazenly announce they are holding corporate data hostage until the company pays a ransom to get it back.

“Using an attack pattern typical of human-operated ransomware campaigns, attackers have compromised target networks for several months beginning earlier this year and have been waiting to monetize their attacks by deploying ransomware when they would see the most financial gain,” says the Microsoft Threat Protection Intelligence Team".

**Skilled Attackers and a Common Attack Pattern**

“Human-operated ransomware attacks represent a different level of threat because adversaries are adept at systems administration and security misconfigurations and can therefore adapt to any path of least resistance they find in a compromised network,” the team explained.

“If they run into a wall, they try to break through. And if they can’t break through a wall, they’ve shown that they can skillfully find other ways to move forward with their attack. As a result, human-operated ransomware attacks are complex and wide-reaching. No two attacks are exactly the same.”

They might not be identical, but they are a variation on a common attack pattern, the attackers obtain initial access via vulnerable and unmonitored internet-facing systems, perform lateral movements, stealing credentials, making sure to accomplish persistence on the systems/networks and, ultimately, deploy the ransomware payload.

Cybercriminals have pounced on many vulnerabilities including

* Brute-force RDP endpoints or Virtual Desktop endpoints without multi-factor authentication (MFA)
* Misconfigurations of web servers (e.g., IIS), backup servers, systems management servers, electronic health record (EHR) software, etc.
* Vulnerabilities in older, no longer supported platforms (e.g., Windows Server 2003 and 2008)
* Vulnerabilities in widespread solutions like ADCs or VPN systems.
* Many, many, many others …

The Microsoft Threat Protection Intelligence Team has shared possible signs of compromise for human-operated ransomware campaigns, such as the appearance of malicious PowerShell scripts, penetration testing tools, suspicious registry modifications, security event logs that have been tampered with, and more.

They have also guided on how to go about eradicating the attackers’ presence and mitigating the fallout. “As ransomware operators continue to compromise new targets, defenders should proactively assess risk, using all available tools. It would be best if you continued to enforce proven preventive solutions—credential hygiene, minimal privileges, and host firewalls—to deter these attacks, which have been consistently observed taking advantage of security hygiene issues and over-privileged credentials,” they noted.

**Airgap Defense:** *Airgap prevents any* *lateral scanning attempt. If under Zero Trust, an intruder breaches the perimeter controls, by compromising a misconfiguration, or bribing an insider, they will have extremely restricted access to sensitive data. Safety measures are be in place to identify and respond to suspicious data access before it becomes a threat*

**The Rising Cost of Ransomware**

Ransomware attacks can differ in size, but it's becoming increasingly common for hacker gangs to demand millions of dollars to restore access to the network. If organizations can't do business, they could potentially lose large sum of revenue for each day, perhaps even every hour, the network is unavailable. It's estimated that the NotPetya ransomware attack on shipping firm Maersk cost up to $300m in losses.

If an organization chooses not to pay the payment, not only will they find themselves losing revenue for a time that could last weeks, perhaps months, they will likely find themselves paying a large sum for a security company to come in and restore access to the network. In some cases, this might even cost more than the ransom demand, but at least in this instance, the payment is going to a legitimate business rather than funding criminals.

**IT Department Plays a Critical Role in Security**

Attackers are preying on environments and configurations that many IT administrators manage and control. It has been observed that administrators may use non-randomized passwords or disable anti-virus and other security features to improve performance. Human-operated attacks will continue to take advantage of security weaknesses to deploy destructive attacks. Until administrators consistently and aggressively apply security best practices to their networks they will be exploitable.

**Airgap Defense:** *Airgap’s Zero Trust Isolation technology blocks all unauthorized movement within the corporate environment.*

Human-operated attacks follow a fairly lengthy and complex attack-chain before the ransomware payload is extended. If these alerts are immediately prioritized, security operations teams can better mitigate attacks and block the ransomware payload. Commodity malware infections like Dridex, Emotet, and Trickbot should be remediated and treated as serious compromises of the network.

Human-operated ransomware groups routinely hit identical targets multiple times. This is typically due to oversight in eliminating *persistence exposure* that permits hackers to return and deploy subsequent rounds of payloads. All while the targeted organizations focus on resolving the ransomware impacts. Organizations should concentrate less on resolving alerts in the shortest possible time and more on investigating the attack surface that caused the alerts. This requires a thorough understanding of the complete attack-chain and identifying and fixing the underlying vulnerabilities within the infrastructure to keep the attackers at bay.

While Doppelpaymer, Wadhrama, Ryuk, Samas, REvil, and other human-operated attacks require a shift in mindset, the difficulties they pose are hardly unique. Removing the attackers' capability to move laterally from one machine to another in a network ensures human-operated ransomware attacks are less impactful and that the network is more flexible against all kinds of cyberattacks.

**About Airgap Networks**

Airgap helps implement comprehensive Zero Trust in minutes without the need for agents, APIs, or forklift upgrades. The patent-pending Zero Trust Isolation platform assures threat propagation protection. Airgap’s solution can be deployed in minutes, not months. Visit airgap.io to learn more or to schedule a demo.

References:

*<https://www.securityweek.com/human-operated-ransomware-growing-threat-businesses-microsoft>*

*<https://www.thewindowsclub.com/mitigate-human-operated-ransomware-attacks>*

*<https://digital.nhs.uk/blog/transformation-blog/2020/how-to-cut-your-risks-of-a-human-operated-ransomware-attack>*

*<http://thewindowsupdate.com/2020/05/12/defending-networks-against-human-operated-ransomware/>*

*<https://www.pwc.co.uk/issues/cyber-security-services/insights/responding-to-growing-human-operated-ransomware-attacks-threat.html>*

*<https://qomplx.com/recent-attacks-reveal-human-directed-ransomware-playbook/>*

*<https://securityboulevard.com/2020/09/understanding-the-tactics-of-ransomware-attacks/>*

*<https://www.semperis.com/blog/the-weaponization-of-active-directory-an-inside-look-at-ransomware-attacks-ryuk-maze-and-savethequeen/>*
