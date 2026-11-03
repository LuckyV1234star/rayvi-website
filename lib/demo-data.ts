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
  },
  {
    id: "dentist",
    day: "tue",
    title: "Dentist",
    time: "10:30–11:15",
    place: "City Clinic",
  },
  {
    id: "standup",
    day: "wed",
    title: "Studio standup",
    time: "9:30–9:50",
    place: "Home",
  },
  {
    id: "review",
    day: "thu",
    title: "Design review",
    time: "15:00–16:00",
    place: "Studio",
  },
  {
    id: "dinner",
    day: "fri",
    title: "Dinner",
    time: "19:00–21:00",
    place: "Lantern",
  },
  {
    id: "market",
    day: "sat",
    title: "Market",
    time: "11:00–12:30",
    place: "Harbor market",
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
  categories: { name: string; amount: number }[];
  items: ExpenseItem[];
};

export const expenseMonths: ExpenseMonth[] = [
  {
    id: "2026-09",
    label: "September",
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

export const personaAccents = [
  { id: "iris", label: "Iris", accent: "#B5C4FF", onAccent: "#1D2D5F" },
  { id: "gold", label: "Gold", accent: "#E9C349", onAccent: "#3B2F00" },
  { id: "veil", label: "Veil", accent: "#7F8EC7", onAccent: "#1D2D5F" },
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

export function formatMoney(amount: number) {
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}
