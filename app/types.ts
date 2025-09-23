type CompanyEvent = {
  audioUrl?: string | null;
  eventDate: string;
  eventId: number;
  eventTitle: string;
  fiscalPeriod: string;
  fiscalYear: string;
  pdfUrl?: string | null;
  qnaTimestamp?: number | null;
  reportUrl: string;
};

type ColorSettings = {
  brandColor: string;
};

export type CompanyInfo = {
  colorSettings: ColorSettings;
  companyCountry: string;
  companyId: number;
  companyName: string;
  companyTicker: string;
  description: string;
  displayName: string;
  events: CompanyEvent[];
  iconUrl: string | null;
  infoUrl: string;
  isins: string[];
  liveUrl: string;
  logoDarkUrl: string;
  logoLightUrl: string;
  reportingCurrency: string;
};
