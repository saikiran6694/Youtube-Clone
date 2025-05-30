export class VersionService {
    static getMajorVersionFromVersion(version) {
        if (!version) return 0;
        const majorVersion = version.split('.')[0];
        const parsed = parseInt(majorVersion, 10);
        return isNaN(parsed) ? 0 : parsed;
    }
}
