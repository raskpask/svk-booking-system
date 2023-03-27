export enum CourtType {
  CenterCourt = "CenterCourt",
  Court1 = "Court1",
  Court2 = "Court2",
  Court3 = "Court3",
  Court4 = "Court4",
  Unknown = "Unknown",
}
export function convertToEnum(
  enumString: string | undefined
): CourtType | undefined {
  switch (enumString) {
    case "CenterCourt":
      return CourtType.CenterCourt;
    case "Court1":
      return CourtType.Court1;
    case "Corut2":
      return CourtType.Court2;
    case "Corut3":
      return CourtType.Court3;
    case "Corut4":
      return CourtType.Court4;
    default:
      return undefined;
  }
}
