-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2022 at 10:25 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recruitment`
--

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `id` int(11) NOT NULL,
  `accessor` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created` int(11) NOT NULL,
  `updated` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`id`, `accessor`, `title`, `content`, `created`, `updated`, `createdAt`, `updatedAt`) VALUES
(1, 'aboutUs', 'About Us', '<div id=\"m#msg-f:1729766338043717709\" class=\"mail-message expanded\" style=\"color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12.8px;\"><div class=\"mail-message-content collapsible zoom-normal mail-show-images \" style=\"overflow-wrap: break-word; width: 380.19px; margin: 16px 0px; user-select: auto;\"><div class=\"clear\"><div dir=\"auto\"><br><b>MYKA</b> is an environmentally&nbsp; and socially conscious e-commerce clothing line based in <b>Switzerland</b>, designed in Italy and Indonesia, manufactured in The <b>Philippines</b>. The brand is a brainchild of a Filipina Entrepreneur&nbsp; who\'s&nbsp; passionate about two things: protecting the planet and empowering women. These are the core values of us this is why we first followed the ethical fashion movement. Hence, all components of our supply&nbsp; chain -from designing and sourcing to manufacturing and delivery are sustainably managed and maintained. Secondly, we support women and empower them with confidence. This is why we partner with a number of mothers in The Philippines who lend their skills and finesse to our products.<br><br>Our garments are not just epitome of our vision of an empowered community of women and a greener earth, but also of the tireless efforts of housewives. Each garment is a testimony of extraordinary skills, sustainable work and meaningful living. What you see in our line of products is our clear business vision,&nbsp; combined with the unique talent of women in the comfort of their own home.</div><div dir=\"auto\"><br></div><div dir=\"auto\"><br></div><div dir=\"auto\"><br></div><div dir=\"auto\">WE ARE ALSO A PLATFORM FOR <b>WOMEN</b><br>&nbsp;<br>You\'ll&nbsp; find a range of products from other women-led , ethically-driven brands in our shop, alongside our own.<br>We are opening up our shop to other female brands.<br>If you\'re&nbsp; a woman-led brand selling clothing, accessories,&nbsp; home decor, and&nbsp; beauty or wellness products, then&nbsp; get in touch with us to display your collection in our online store.<br>This option is currently Only&nbsp; available&nbsp; for&nbsp; women in <b>Switzerland</b>.<br>Contact us at&nbsp;<a href=\"mailto:contact@mykafluri.com\" target=\"_blank\" rel=\"noreferrer\" style=\"color: rgb(66, 133, 244);\">contact@mykafluri.com</a>&nbsp;<br>We would love to have you as one of our suppliers.&nbsp;</div><div dir=\"auto\"><br></div><div><br></div></div></div><div class=\"mail-message-footer spacer collapsible\" style=\"height: 0px;\"></div></div>', 1591716283, 1649945040, '2020-03-23 15:32:10', '2022-04-14 14:04:00'),
(2, 'termsAndConditions', 'Terms & Conditions', '<h1 style=\"font-size: 24px; margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51);\">Terms and Conditions for&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span></h1><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Introduction</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">These Website Standard Terms and Conditions written on this webpage shall manage your use of our website,&nbsp;<span class=\"highlight preview_website_name\" style=\"background: rgb(255, 255, 238);\">Webiste Name</span>&nbsp;accessible at&nbsp;<span class=\"highlight preview_website_url\" style=\"background: rgb(255, 255, 238);\">Website.com</span>.</p><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Minors or people below 18 years old are not allowed to use this Website.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Intellectual Property Rights</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Other than the content you own, under these Terms,&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">You are granted limited license only for purposes of viewing the material contained on this Website.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Restrictions</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">You are specifically restricted from all of the following:</p><ul style=\"margin: 1em 0px; padding: 0px 0px 0px 1em; list-style-position: outside; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">publishing any Website material in any other media;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">selling, sublicensing and/or otherwise commercializing any Website material;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">publicly performing and/or showing any Website material;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">using this Website in any way that is or may be damaging to this Website;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">using this Website in any way that impacts user access to this Website;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li><li style=\"margin-top: 0.5em; margin-bottom: 0.5em;\">using this Website to engage in any advertising or marketing.</li></ul><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Certain areas of this Website are restricted from being access by you and&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Your Content</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Your Content must be your own and must not be invading any third-party\'s rights.&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;reserves the right to remove any of Your Content from this Website at any time without notice.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">No warranties</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This Website is provided “as is,” with all faults, and&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Limitation of liability</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">In no event shall&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. &nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Indemnification<p style=\"margin: 1em 0px;\"></p><p style=\"margin: 1em 0px;\">You hereby indemnify to the fullest extent&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p></h2><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Severability</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Variation of Terms</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Assignment</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">The&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Entire Agreement</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">These Terms constitute the entire agreement between&nbsp;<span class=\"highlight preview_company_name\" style=\"background: rgb(255, 255, 238);\">Company Name</span>&nbsp;and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p><h2 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 20px;\">Governing Law &amp; Jurisdiction</h2><p style=\"margin: 1em 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">These Terms will be governed by and interpreted in accordance with the laws of the State of&nbsp;<span class=\"highlight preview_country\" style=\"background: rgb(255, 255, 238);\">Country</span>, and you submit to the non-exclusive jurisdiction of the state and federal courts located in&nbsp;<span class=\"highlight preview_country\" style=\"background: rgb(255, 255, 238);\">Country</span>&nbsp;for the resolution of any disputes.</p>\n<p></p>\n<p></p>\n<p></p>', 1591716283, 1628837561, '2020-03-23 15:32:39', '2021-08-13 06:52:41'),
(3, 'privacyPolicy', 'Privacy Policy', '<h1 class=\"h4\" style=\"font-family: Helvetica, Arial, sans-serif; color: rgb(33, 37, 41);\"><b>Privacy Policy for [MYKA]</b></h1><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at [contact@mykafluri.com].</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">At [www.mykafluri.com] we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by [www.mykafluri.com] and how we use it.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Log Files</span><br>Like many other Web sites, [www.mykafluri.com] makes use of log files. These files merely logs visitors to the site – usually a standard procedure for hosting companies and a part of hosting services\'s analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user\'s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Cookies and Web Beacons</span><br>[www.mykafluri.com] uses cookies to store information about visitors\' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors\' browser type or other information that the visitor sends via their browser.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">DoubleClick DART Cookie</span><br></p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">? Google, as a third party vendor, uses cookies to serve ads on [www.mykafluri.com].<br><br>? Google\'s use of the DART cookie enables it to serve ads to our site\'s visitors based upon their visit to [www.mykafluri.com] and other sites on the Internet.<br><br>? Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL –&nbsp;<a rel=\"noopener noreferrer\" href=\"https://www.google.com/privacy_ads.html\" style=\"color: rgb(41, 72, 125); transition-duration: 0.3s !important;\">http://www.google.com/privacy_ads.html</a></p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Our Advertising Partners</span><br></p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include …….<br></p><ul style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><li>Google</li><li>Commission Junction</li><li>Amazon</li><li>Adbrite</li><li>Clickbank</li><li>Yahoo! Publisher Network</li><li>Chitika</li><li>Kontera</li></ul><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><em>While each of these advertising partners has their own Privacy Policy for their site, an updated and hyperlinked resource is maintained here:&nbsp;<a href=\"https://www.privacypolicyonline.com/privacy-policy-links/\" style=\"color: rgb(41, 72, 125); transition-duration: 0.3s !important;\">Privacy Policy Links</a>.<br><br>You may consult this listing to find the privacy policy for each of the advertising partners of [www.mykafluri.com].</em></p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">These third-party ad servers or ad networks use technology in their respective advertisements and links that appear on [www.mykafluri.com] and which are sent directly to your browser. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our site\'s third-party ad networks to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on the site.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">[www.mykafluri.com] has no access to or control over these cookies that are used by third-party advertisers.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"></p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Third Party Privacy Policies</span><br>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. [www.mykafluri.com]\'s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites. You may find a comprehensive listing of these privacy policies and their links here:&nbsp;<a href=\"https://www.privacypolicyonline.com/privacy-policy-links/\" title=\"Privacy Policy Links\" style=\"color: rgb(41, 72, 125); transition-duration: 0.3s !important;\">Privacy Policy Links</a>.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\">If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers\' respective websites.&nbsp;<a href=\"https://www.privacypolicyonline.com/what-are-cookies/\" style=\"color: rgb(41, 72, 125); transition-duration: 0.3s !important;\">What Are Cookies?</a></p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Children\'s Information</span><br>We believe it is important to provide added protection for children online. We encourage parents and guardians to spend time online with their children to observe, participate in and/or monitor and guide their online activity.<br>[www.mykafluri.com] does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that [www.mykafluri.com] has in its database the personally-identifiable information of a child under the age of 13, please contact us immediately (using the contact in the first paragraph) and we will use our best efforts to promptly remove such information from our records.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Online Privacy Policy Only</span><br>This privacy policy applies only to our online activities and is valid for visitors to our website and regarding information shared and/or collected there.<br>This policy does not apply to any information collected offline or via channels other than this website.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Consent</span><br>By using our website, you hereby consent to our privacy policy and agree to its terms.</p><p style=\"color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 18px;\"><span style=\"font-weight: bolder;\">Update</span><br>This Privacy Policy was last updated on: Nov 1st, 2019. Should we update, amend or make any changes to our privacy policy, those changes will be posted here.</p>', 1591716283, 1649944494, '2020-03-23 15:33:04', '2022-04-14 13:54:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `family_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL COMMENT '0 = User , 1 => Admin',
  `image` varchar(255) NOT NULL,
  `citizenship` varchar(200) NOT NULL,
  `date_birth` date NOT NULL,
  `address` text NOT NULL,
  `zip_code` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `created` varchar(255) NOT NULL,
  `updated` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `family_name`, `email`, `phone`, `password`, `role`, `image`, `citizenship`, `date_birth`, `address`, `zip_code`, `city`, `created`, `updated`, `createdAt`, `updatedAt`) VALUES
(2, '', '', 'admin@admin.com', '', '$2b$12$ZGS6moSupq0yG72pYS9GjO482mzkeYP95i5V1n65PgrD0HpTcazjS', 1, '', '', '0000-00-00', '', 0, '', '1669743053', '1669743053', '2022-11-29 17:30:53', '2022-11-29 17:30:53'),
(3, 'Ferdinand Shields', 'Lee Valencia', 'jisekyfe@mailinator.com', '8745456656', '', 0, '', 'Voluptate aliquam po', '1987-11-03', 'Rerum ab ad exercita', 65822, 'Itaque fuga Dolorum', '1670089373', '1670089373', '2022-12-03 17:42:53', '2022-12-03 17:42:53'),
(4, 'Owen Montgomery', 'Kylynn Dillon', 'sykajeke@mailinator.com', '8665565656', '', 0, '', 'Aliquid et nostrud m', '1978-05-27', 'Nulla perspiciatis ', 93911, 'Est totam qui incid', '1670089436', '1670089436', '2022-12-03 17:43:55', '2022-12-03 17:43:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;