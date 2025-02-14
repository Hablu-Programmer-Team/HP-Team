export type User = {
    name: string;
    email: string;
    password: string;
    imgSrc?: string;
    userName?: string;
    number?: number;
    description?: string;
};

export const premiumUsers: User[] = [
    { name: "Salman Vai", email: "salman@hpteam.com", password: "Teacher@hpTeam" },
    { name: "Alamin Mridha", email: "alamin@hpteam.com", password: "Member@hpTeam" },
    { name: "Eyachir Arafat", email: "eyachir@hpteam.com", password: "Member@hpTeam" },
    { name: "Hashibub Alam", email: "hashib@hpteam.com", password: "Member@hpTeam" },
    { name: "Muntasir Mamun", email: "mamun@hpteam.com", password: "Member@hpTeam" },
    { name: "Sayed Udoy", email: "udoy@hpteam.com", password: "Member@hpTeam" },

];

// Ensure users exist in localStorage
export const initializeUsers = (): void => {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(premiumUsers));
    }
};
export const getUsers = (): User[] => {
    return JSON.parse(localStorage.getItem("users") || "[]");
};

export const saveUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
};
