export const getCompanyStatus = (status: string) => {
    switch (status) {
        case "ACTIVE":
            return "действует";
        case "LIQUIDATING":
            return "ликвидируется";
        case "LIQUIDATED":
            return "ликвидировано";
        case "BANKRUPT":
            return "банкротство";
        case "REORGANIZING":
            return "реогрганизация";
        default:
            return "";
    }
}


export const getConvertedDate = (timestamp: number | null) => {
    if (timestamp == null) {
        return;
    } else {
        return new Date(timestamp).toLocaleDateString("ru-RU")
    }
}

