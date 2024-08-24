interface Mot {
    id?: number;
    mot?: string;
    esqueleto?: string;
    consonneVoyelle?: Record<string, string | undefined>;
}
export default Mot;
