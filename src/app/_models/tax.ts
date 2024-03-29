export enum SalesTableEnum {
    AL = 0.040,
    AK = 0.000,
    AZ = 0.056,
    AR = 0.065,
    CA = 0.0725,
    CO = 0.029,
    CT = 0.0635,
    DE = 0.00,
    DC = 0.060,
    FL = 0.060,
    GA = 0.040,
    HI = 0.040,
    ID = 0.060,
    IL = 0.0625,
    IN = 0.070,
    IA = 0.060,
    KS = 0.065,
    KY = 0.06,
    LA = 0.045,
    ME = 0.055,
    MD = 0.06,
    MA = 0.0625,
    MI = 0.06,
    MN = 0.06875,
    MS = 0.70,
    MO = 0.4225,
    MT = 0.00,
    NE = 0.055,
    NV = 0.0685,
    NH = 0.00,
    NJ = 0.06625,
    NM = 0.05125,
    NY = 0.040,
    NC = 0.0475,
    ND = 0.050,
    OH = 0.0575,
    OK = 0.0450,
    OR = 0.00,
    PA = 0.060,
    RI = 0.070,
    SC = 0.060,
    SD = 0.0450,
    TN = 0.070,
    TX = 0.0625,
    UT = 0.0610,
    VT = 0.060,
    VA = 0.0530,
    WA = 0.0650,
    WV = 0.060,
    WI = 0.050,
    WY = 0.040
}

export class SalesTax {

    public static SalesTable = {
        "AL": SalesTableEnum.AL,
        "AK": SalesTableEnum.AK,
        "AZ": SalesTableEnum.AZ,
        "AR": SalesTableEnum.AR,
        "CA": SalesTableEnum.CA,
        "CO": SalesTableEnum.CO,
        "CT": SalesTableEnum.CT,
        "DE": SalesTableEnum.DE,
        "DC": SalesTableEnum.DC,
        "FL": SalesTableEnum.FL,
        "GA": SalesTableEnum.GA,
        "HI": SalesTableEnum.HI,
        "ID": SalesTableEnum.ID,
        "IL": SalesTableEnum.IL,
        "IN": SalesTableEnum.IN,
        "IA": SalesTableEnum.IA,
        "KS": SalesTableEnum.KS,
        "KY": SalesTableEnum.KY,
        "LA": SalesTableEnum.LA,
        "ME": SalesTableEnum.ME,
        "MD": SalesTableEnum.MD,
        "MA": SalesTableEnum.MA,
        "MI": SalesTableEnum.MI,
        "MN": SalesTableEnum.MN,
        "MS": SalesTableEnum.MS,
        "MO": SalesTableEnum.MO,
        "MT": SalesTableEnum.MT,
        "NE": SalesTableEnum.NE,
        "NV": SalesTableEnum.NV,
        "NH": SalesTableEnum.NH,
        "NJ": SalesTableEnum.NJ,
        "NM": SalesTableEnum.NM,
        "NY": SalesTableEnum.NY,
        "NC": SalesTableEnum.NC,
        "ND": SalesTableEnum.ND,
        "OH": SalesTableEnum.OH,
        "OK": SalesTableEnum.OK,
        "OR": SalesTableEnum.OR,
        "PA": SalesTableEnum.PA,
        "RI": SalesTableEnum.RI,
        "SC": SalesTableEnum.SC,
        "SD": SalesTableEnum.SD,
        "TN": SalesTableEnum.TN,
        "TX": SalesTableEnum.TX,
        "UT": SalesTableEnum.UT,
        "VT": SalesTableEnum.VT,
        "VA": SalesTableEnum.VA,
        "WA": SalesTableEnum.WA,
        "WV": SalesTableEnum.WV,
        "WI": SalesTableEnum.WI,
        "WY": SalesTableEnum.WY
    };

    public static CalculateSalesTax(sub_total: number, state: string): number {

        let tax = (sub_total * SalesTax.SalesTable[state]).toFixed(2);

        return parseFloat(tax);
    }
}