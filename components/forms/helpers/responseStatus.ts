export type ResponseStatus = "pending" | "sent" | "error" | "default";

export const formStatusCode = {
    pending: "Trwa dodawanie...",
    sent: "Dodano pomyślnie.",
    default: "Dodaj",
    error: "Bład dodawania.",
};
