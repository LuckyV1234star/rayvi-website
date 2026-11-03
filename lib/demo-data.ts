export type ChatReply = {
  user: string;
  reply: string;
};

export const openingChat = [
  {
    id: "u0",
    role: "user" as const,
    text: "Put Thursday's design review on my calendar at 3.",
  },
  {
    id: "r0",
    role: "rayvi" as const,
    text: "Thursday, 3:00–4:00. Design review is on the calendar. I will remind you 15 minutes before.",
  },
];

export const cannedReplies: ChatReply[] = [
  {
    user: "Also add lunch with Mina at noon.",
    reply: "Lunch with Mina, Thursday 12:00–1:00. Added.",
  },
  {
    user: "Log $18 for coffee this morning.",
    reply: "Logged $18 for coffee. It sits under Food.",
  },
  {
    user: "Keep the next replies brief.",
    reply: "Understood. I will stay brief.",
  },
];

export type CalendarEvent = {
  id: string;
  day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  title: string;
  time: string;
  place: string;
  startMin: number;
  endMin: number;
};

export const sampleWeek = [
  { key: "mon" as const, label: "Mon", date: "2" },
  { key: "tue" as const, label: "Tue", date: "3" },
  { key: "wed" as const, label: "Wed", date: "4" },
  { key: "thu" as const, label: "Thu", date: "5" },
  { key: "fri" as const, label: "Fri", date: "6" },
  { key: "sat" as const, label: "Sat", date: "7" },
  { key: "sun" as const, label: "Sun", date: "8" },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "run",
    day: "mon",
    title: "Morning run",
    time: "7:00–7:45",
    place: "Riverside path",
    startMin: 7 * 60,
    endMin: 7 * 60 + 45,
  },
  {
    id: "dentist",
    day: "tue",
    title: "Dentist",
    time: "10:30–11:15",
    place: "City Clinic",
    startMin: 10 * 60 + 30,
    endMin: 11 * 60 + 15,
  },
  {
    id: "standup",
    day: "wed",
    title: "Studio standup",
    time: "9:30–9:50",
    place: "Home",
    startMin: 9 * 60 + 30,
    endMin: 9 * 60 + 50,
  },
  {
    id: "review",
    day: "thu",
    title: "Design review",
    time: "15:00–16:00",
    place: "Studio",
    startMin: 15 * 60,
    endMin: 16 * 60,
  },
  {
    id: "dinner",
    day: "fri",
    title: "Dinner",
    time: "19:00–21:00",
    place: "Lantern",
    startMin: 19 * 60,
    endMin: 21 * 60,
  },
  {
    id: "market",
    day: "sat",
    title: "Market",
    time: "11:00–12:30",
    place: "Harbor market",
    startMin: 11 * 60,
    endMin: 12 * 60 + 30,
  },
];

export type ExpenseItem = {
  id: string;
  title: string;
  category: string;
  amount: number;
  when: string;
};

export type ExpenseMonth = {
  id: string;
  label: string;
  chip: string;
  intake: number;
  daily: number[];
  categories: { name: string; amount: number }[];
  items: ExpenseItem[];
};

export const expenseMonths: ExpenseMonth[] = [
  {
    id: "2026-09",
    label: "September",
    chip: "Sep 2026",
    intake: 2100,
    daily: [12, 40, 18, 64, 22, 0, 36, 48, 15, 70, 20, 8, 55, 30],
    categories: [
      { name: "Food", amount: 286 },
      { name: "Transit", amount: 74 },
      { name: "Home", amount: 410 },
      { name: "Fun", amount: 120 },
    ],
    items: [
      { id: "s1", title: "Rent", category: "Home", amount: 410, when: "Sep 1" },
      { id: "s2", title: "Metro card", category: "Transit", amount: 36, when: "Sep 4" },
      { id: "s3", title: "Groceries", category: "Food", amount: 62.4, when: "Sep 12" },
      { id: "s4", title: "Cinema", category: "Fun", amount: 18, when: "Sep 20" },
      { id: "s5", title: "Dinner", category: "Food", amount: 54, when: "Sep 27" },
    ],
  },
  {
    id: "2026-10",
    label: "October",
    chip: "Oct 2026",
    intake: 2100,
    daily: [18, 24, 40, 12, 80, 16, 22, 36, 90, 14, 28, 44, 10, 60],
    categories: [
      { name: "Food", amount: 340 },
      { name: "Transit", amount: 92 },
      { name: "Home", amount: 410 },
      { name: "Fun", amount: 188 },
    ],
    items: [
      { id: "o1", title: "Rent", category: "Home", amount: 410, when: "Oct 1" },
      { id: "o2", title: "Coffee", category: "Food", amount: 18, when: "Oct 3" },
      { id: "o3", title: "Taxi", category: "Transit", amount: 24, when: "Oct 9" },
      { id: "o4", title: "Groceries", category: "Food", amount: 71.1, when: "Oct 18" },
      { id: "o5", title: "Concert", category: "Fun", amount: 96, when: "Oct 22" },
    ],
  },
  {
    id: "2026-11",
    label: "November",
    chip: "This Month",
    intake: 2400,
    daily: [40, 18, 48, 22, 12, 8, 30, 16, 0, 26, 14, 20, 10, 6],
    categories: [
      { name: "Food", amount: 148 },
      { name: "Transit", amount: 40 },
      { name: "Home", amount: 410 },
      { name: "Fun", amount: 36 },
    ],
    items: [
      { id: "n1", title: "Rent", category: "Home", amount: 410, when: "Nov 1" },
      { id: "n2", title: "Bus pass", category: "Transit", amount: 40, when: "Nov 1" },
      { id: "n3", title: "Coffee", category: "Food", amount: 18, when: "Nov 2" },
      { id: "n4", title: "Groceries", category: "Food", amount: 48.5, when: "Nov 3" },
      { id: "n5", title: "Book", category: "Fun", amount: 22, when: "Nov 4" },
    ],
  },
];

export const themePresets = [
  {
    id: "obsidian",
    name: "Obsidian",
    primary: "#B5C4FF",
    onPrimary: "#1D2D5F",
    secondary: "#E9C349",
    swatches: ["#131315", "#B5C4FF", "#7F8EC7", "#E9C349"],
  },
  {
    id: "amber_noir",
    name: "Amber Noir",
    primary: "#F1C079",
    onPrimary: "#3C2F00",
    secondary: "#B5C4FF",
    swatches: ["#14120E", "#F1C079", "#A87F3E", "#B5C4FF"],
  },
  {
    id: "deep_sea",
    name: "Deep Sea",
    primary: "#9ED8E8",
    onPrimary: "#0D1418",
    secondary: "#F2C879",
    swatches: ["#0D1418", "#9ED8E8", "#5C93A6", "#F2C879"],
  },
] as const;

export const personaTones = [
  {
    id: "brief",
    label: "Brief",
    line: "Thursday, 3pm. Design review. Reminder set.",
  },
  {
    id: "warm",
    label: "Warm",
    line: "Got it — Thursday at 3 for the design review. I will nudge you a little beforehand.",
  },
  {
    id: "formal",
    label: "Formal",
    line: "The design review is scheduled for Thursday at 15:00, with a reminder 15 minutes prior.",
  },
] as const;

/** Sample psyche note. Surfaces fall back to "Steady" only if this is empty. */
export const psycheStatusLine =
  "Quiet afternoon. Thursday's review is already on the calendar.";

export function formatMoney(amount: number) {
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}
