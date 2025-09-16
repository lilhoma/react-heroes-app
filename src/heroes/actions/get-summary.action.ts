import { heroAPI } from "../api/hero.api"
import type { SummaryInformationResponse } from "../interfaces/summary-infomation.response";

export const getSummaryAction = async () => {
    const { data } = await heroAPI.get<SummaryInformationResponse>('/summary');

    return data;
}