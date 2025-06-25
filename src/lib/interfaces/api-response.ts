import { Project } from "./projects";

export interface ApiResponse {
    status: number;
    success: boolean;
    version: string;
    total: number;
    result: Project[];
}
