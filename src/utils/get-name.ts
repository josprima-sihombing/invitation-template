export default function getName() {
  if (typeof window === "undefined") {
    return "";
  }

  const url = new URL(window.location.href);

  const guestName = url.searchParams.get("to");

  if (!guestName) {
    return "Bapak/Ibu/Saudara/i";
  }

  return guestName.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}
