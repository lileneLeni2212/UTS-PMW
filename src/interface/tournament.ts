export interface Tournament{
    username: string;
    Playingdate: Date;
    HomeTeam: string;
    AwayTeam: string;
    HomeScore: number;
    AwayScore: number;
    RefName: string;
    notes?: string;
}