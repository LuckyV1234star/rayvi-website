import type { Locale } from "@/lib/copy";

export type LegalPageId = "privacy" | "support" | "terms";

export type LegalDocument = {
  title: string;
  effective: string;
  intro: string;
  sections: string[];
};

const en = {
  privacy: {
    title: "Privacy Policy",
    effective: "6 November 2026",
    intro:
      'This policy explains how Rayvi (the website at https://rayvi.net and the mobile and desktop apps) collects, uses, and shares personal data. The operator is Yu Ching Leung ("we"). By using the site or app, you acknowledge this policy.',
    sections: [
      "Data we collect: the email and password you provide (passwords are stored securely, not in plain text); if you sign in with Google or Apple where those options are offered, we receive the name and email those services provide to us; persona name, look, tone, moods or emotes, and images you upload; chat content, reminders, and expense records; events from device calendars you allow us to read and write (we do not access calendars through Google account sign-in); sleep data synced through HealthKit if you allow it on iOS (used to detect waking and offer a morning greeting); device location if you turn it on (for example arrival or home reminders); device tokens needed for push notifications; email you submit for early access or a waitlist; and technical logs such as device type, IP address, usage, and error data.",
      "How we use it: to create and maintain your account; to generate persona replies and secretary features (calendar, expenses, reminders, proactive messages); to provide, secure, and improve the service; and to contact you where you agree or the law requires. We do not sell your personal data.",
      "Who we share it with: cloud hosting providers (the service currently runs on Google Cloud); third-party AI model providers used to generate replies; Apple push services if you use iOS notifications; and email delivery providers if we send you mail. They process data only as needed to provide those services.",
      "Artificial intelligence: your prompts, conversation context, and related content may be sent to AI providers to generate replies or drafts. Do not submit sensitive information in chat that you do not want those providers to process.",
      "Location and notifications: location and push are not required for core chat. You can turn them off in system settings. If you enable background location, we use it for reminders you choose, such as arrival or arriving home. We do not sell location data to advertisers.",
      "Health and sleep: if you allow HealthKit on iOS, we read sleep data to detect when you wake up and to offer a morning greeting. This is health data. We collect it only with your permission, we do not sell it to advertisers, and we do not use it for unrelated advertising. You can withdraw permission at any time in system settings.",
      "Retention and deletion: we keep data for as long as needed to provide the service. You can delete your account in the app: open Settings and choose Delete account, then type your account email to confirm. You may also email support@rayvi.net to access, correct, or request deletion of your account and related personal data, except where we must keep it by law. We will handle requests in a reasonable time and tell you if more time is needed.",
      "Website: rayvi.net may use cookies or similar technologies that are needed to operate the site. A waitlist collects the email you submit and related technical data.",
      "Children: the service is not directed at children under 13. If we learn we have collected personal data from a child under 13, we will delete it.",
      "International transfers: servers or providers may be outside the place you live. By using the service you understand that data may be transferred to those regions and handled under local law. Where the Hong Kong Personal Data (Privacy) Ordinance applies, we handle personal data in line with it.",
      "Changes: we will post updates at https://rayvi.net and change the effective date as needed. For material changes we will give reasonable notice.",
      "Contact: for privacy questions, email support@rayvi.net.",
    ],
  },
  support: {
    title: "Support",
    effective: "6 November 2026",
    intro: "For help, email support@rayvi.net. Do not send your password by email.",
    sections: [
      "Please include: your account email, device and system (for example iPhone, Android, or desktop), what happened, and screenshots that help us reproduce the issue.",
      "You can delete your account in the app from Settings (Delete account). Waitlist or website signup questions, account or login issues, and requests to access, correct, or delete data can also go to support@rayvi.net.",
      "We will reply in a reasonable time, but we do not promise a fixed deadline. For urgent security issues, put Security in the subject line.",
      "Replies from Rayvi are assisted by artificial intelligence and can be wrong. Please double-check calendars, expenses, and reminders. The service is not legal, medical, financial, or other professional advice.",
    ],
  },
  terms: {
    title: "Terms and Conditions",
    effective: "6 November 2026",
    intro:
      'These terms govern your use of the Rayvi website at https://rayvi.net and the apps. The operator is Yu Ching Leung ("we"). By continuing to use the service you agree to these terms and the Privacy Policy. If you use the service for someone else, you confirm you can bind them to these terms.',
    sections: [
      "The service: Rayvi is a personal secretary whose persona you fully design, including chat, device calendars you enable, expenses, reminders, proactive or location-based reminders you enable, and sleep data from HealthKit if you allow it (used to detect waking and send a morning greeting). The website may describe the product and collect early-access or waitlist signups. Features change over time and some capabilities may be experimental.",
      "Accounts: you can register and sign in with email and password. On platforms where we offer them, you may also sign in with Google or Apple. You must provide accurate information, keep your credentials safe, and are responsible for activity on the account. You may not sell or transfer an account without our written consent.",
      "Acceptable use: do not use the service for unlawful, infringing, harassing, fraudulent, or abusive activity; do not attempt unauthorized access; do not disrupt others; and do not upload content you have no right to use. We may suspend or end accounts that breach these terms.",
      "AI limits: persona replies may be inaccurate, incomplete, or unsuitable. You should verify important information, including events and expenses. The service does not replace a professional adviser.",
      "Your content: you keep rights in images you upload, persona settings, and content you enter. You grant us a worldwide, non-exclusive licence to host and process that material as needed to run, back up, and improve the service. Do not upload material that infringes others' rights.",
      "Our rights: the Rayvi name, software, design, and documentation belong to us or our licensors. Except as these terms allow, you may not copy, adapt, or redistribute them.",
      "Paid features: in-app purchases may not be available yet. If we later offer paid plans, prices, trials, and renewals will be shown at purchase. Purchases through Apple or another platform are also subject to that platform's terms. Joining a waitlist does not include unpaid features we have not shipped.",
      "Disclaimers and liability: the service is provided as is. To the extent the law allows, we do not warrant uninterrupted or error-free service, and we are not liable for indirect, incidental, or consequential loss. Our total liability to you is limited to the amount you paid us for the relevant paid service in the twelve months before the claim; if you paid nothing, then to the minimum the law allows.",
      "Ending the service: you may stop using it at any time. You can delete your account in the app from Settings (Delete account), or email support@rayvi.net to request deletion, as described in the Privacy Policy. We may suspend or end the service for a breach, a legal requirement, or if we shut down the product, and we will notify you where practical.",
      "Governing law: these terms are governed by the laws of Hong Kong. Please try to resolve a dispute with us first; if that fails, the courts of Hong Kong have non-exclusive jurisdiction.",
      "Changes: we may update these terms and post them at https://rayvi.net. Continued use means you accept the updated terms.",
      "Contact: support@rayvi.net",
    ],
  },
} satisfies Record<LegalPageId, LegalDocument>;

const zhHant = {
  privacy: {
    title: "私隱政策",
    effective: "2026 年 11 月 6 日",
    intro:
      "本政策說明 Rayvi（包括 https://rayvi.net 網站及行動／桌面應用程式）如何收集、使用與分享個人資料。營運者為 Yu Ching Leung（下稱「我們」）。使用網站或 App，即表示你知悉本政策。",
    sections: [
      "我們收集的資料：你提供的電郵與密碼（密碼以安全方式儲存，我們不會明文保存）；若你經 Google 或 Apple 登入（於提供該等選項的平台），我們會收到該等服務向我們提供的名稱與電郵；你設定的角色名稱、外觀、口吻、moods／emote 與你上載的圖像；聊天內容、提醒、開支紀錄；你授權後讀寫的裝置日曆事件（我們不以 Google 帳戶登入存取日曆）；你在 iOS 授權後經 HealthKit 同步的睡眠資料（用以判斷起身與早晨問候）；你選擇開啟時的裝置位置（例如到家／到達提醒）；推送所需的裝置權杖；網站 early access 或等候名單所填的電郵；技術紀錄如裝置類型、IP、用量與錯誤日誌。",
      "我們如何使用：建立與維持你的帳戶；產生角色回覆與秘書功能（日曆、開支、提醒、主動訊息）；提供、保安與改善服務；在你同意或法律要求時與你通訊。我們不會出售你的個人資料。",
      "分享對象：雲端託管供應商（現時服務運行於 Google Cloud）；用以產生回覆的第三方人工智能模型供應商；若你使用 iOS 推送，則包括 Apple 的推送服務；若我們向你發信，則包括電郵傳送供應商。上述各方僅在提供服務所需範圍內處理資料。",
      "人工智能：你的提示、對話脈絡與相關內容可能傳送至人工智能供應商以產生回覆或草稿。請勿在對話中提交你不希望此等供應商處理的敏感資料。",
      "位置與通知：位置與推送並非使用核心聊天所必須。你可在系統設定關閉。開啟背景位置時，我們用它提供你所選的到達或回家等提醒，不會把它出售予廣告商。",
      "健康與睡眠：若你在 iOS 授權 HealthKit，我們會讀取睡眠資料，用以判斷你是否起身並提供早晨問候。此屬健康資料，僅在你授權時收集，不會出售予廣告商，亦不會用於與該功能無關的廣告。你可隨時在系統設定收回授權。",
      "保留與刪除：我們在提供服務所需期間保留資料。你可以在應用程式內刪除帳戶：前往設定，選擇「刪除帳號」，並輸入你的帳戶電郵以確認。你亦可透過 support@rayvi.net 要求查閱、更正或刪除帳戶及相關個人資料（法律要求保留者除外）。刪除要求提出後，我們會在合理時間內處理，並告知若需較長時間。",
      "網站：rayvi.net 可能使用運作所必需的 cookie 或類似技術。等候名單只收集你提交的電郵及相關技術資料。",
      "兒童：本服務並非面向 13 歲以下兒童。若我們知悉收集了 13 歲以下兒童的個人資料，會予以刪除。",
      "跨境傳輸：伺服器或供應商可能位於你居住地以外的地區。使用本服務即表示你了解資料可能被傳輸至該等地區並受當地法律規管。若香港《個人資料（私隱）條例》適用，我們會按其規定處理個人資料。",
      "變更：政策更新後會公布於 https://rayvi.net，並視情況更新生效日期。重大變更我們會以合理方式通知。",
      "聯絡：私隱相關問題請電郵 support@rayvi.net。",
    ],
  },
  support: {
    title: "支援",
    effective: "2026 年 11 月 6 日",
    intro: "需要協助時，請電郵 support@rayvi.net。請勿在電郵中寄送密碼。",
    sections: [
      "請寫明：帳戶電郵、裝置與系統（例如 iPhone／Android／桌面）、發生什麼、以及有助重現問題的截圖。",
      "你可以在應用程式的設定中選擇「刪除帳號」刪除帳戶。等候名單或網站登記查詢、帳戶或登入問題，以及查閱、更正或刪除資料的要求，亦可寄到 support@rayvi.net。",
      "我們會在合理時間內回覆，但不承諾固定時限。緊急安全問題請在主旨註明 Security。",
      "Rayvi 的回覆由人工智能協助產生，可能有誤；日曆、開支或提醒請自行核對。本服務不構成法律、醫療、財務或專業意見。",
    ],
  },
  terms: {
    title: "使用條款",
    effective: "2026 年 11 月 6 日",
    intro:
      "本條款規管你使用 Rayvi 網站（https://rayvi.net）及應用程式。營運者為 Yu Ching Leung（下稱「我們」）。繼續使用即表示你同意本條款及私隱政策。若你代表他人使用，你保證有權使該人受本條款約束。",
    sections: [
      "服務內容：Rayvi 是可完全自訂角色的個人秘書，包括對話、你開啟授權的裝置日曆、開支、提醒、你開啟的主動訊息或位置相關提醒，以及你授權時經 HealthKit 同步的睡眠資料（用以判斷起身與早晨問候）。網站亦可能提供產品介紹與 early access／等候名單登記。功能會不時更新，部分能力可能仍屬測試。",
      "帳戶：你可以電郵與密碼註冊及登入。在我們提供的平台上，你亦可使用 Google 或 Apple 登入。你須提供準確資料、保管好登入憑證，並對帳戶下的活動負責。未經我們書面同意，不得出售或轉讓帳戶。",
      "可接受使用：不得利用服務從事違法、侵權、騷擾、詐騙或濫用行為；不得嘗試未經授權存取系統；不得干擾他人使用；不得上傳你無權使用的內容。我們可在合理情況下暫停或終止違規帳戶。",
      "人工智能限制：角色回覆可能不準確、不完整或不合適。你應自行核對重要資訊（包括日程與開支）。服務不替代專業人士。",
      "你的內容：你保留你上載的圖像、角色設定與你輸入內容的權利。你授予我們為營運、備援與改善服務所需的全球、非獨佔授權。請勿上傳侵犯他人權利的材料。",
      "我們的權利：Rayvi 名稱、軟體、設計與說明文件屬我們或授權方所有。除本條款允許外，你不得複製、改作或再分發。",
      "付費功能：目前可能尚未提供應用程式內購買。日後若推出付費方案，價格、試用與續費會在購買時顯示；透過 Apple 或其他平台支付者，其條款亦適用。未提供的功能不得視為已包含在等候名單登記之中。",
      "免責與責任限制：服務按「現況」提供。法律允許範圍內，我們不保證不中斷或無錯誤，亦不對間接、附帶或衍生損失負責。我們對你的總責任以你在引起申索前十二個月內就相關付費服務向我們支付的金額為上限；若你未付款，則以法律允許的最低額為上限。",
      "終止：你可隨時停止使用。你可以在應用程式的設定中選擇「刪除帳號」刪除帳戶，或依私隱政策電郵 support@rayvi.net 要求刪除。我們亦可因違規、法律要求或停止營運而暫停或終止服務，並在可行時通知你。",
      "準據法：本條款受香港法律管轄。爭議應盡先友好協商；協商不成，提交香港法院非專屬管轄。",
      "變更：我們可更新條款並公布於 https://rayvi.net。繼續使用即表示接受更新後的條款。",
      "聯絡：support@rayvi.net",
    ],
  },
} satisfies Record<LegalPageId, LegalDocument>;

export const legalCopy: Record<Locale, Record<LegalPageId, LegalDocument>> = {
  en,
  "zh-Hant": zhHant,
};
