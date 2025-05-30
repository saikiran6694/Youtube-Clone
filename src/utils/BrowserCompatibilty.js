import { VersionService } from "./VersionService";

const supportedBrowsers = [
  "Chrome",
  "Mobile Chrome",
  "Mobile Safari",
  "Safari",
  "Edge",
];

export class BrowserCompatilibilityService {
  static isUserBrowserCompatibleWithOurChat() {
    try {
      const ua = navigator.userAgent;
      const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);

      let name = null;
      let version = "0.0.0";

      // Edge (Chromium)
      if (/Edg\/(\d+(\.\d+)?)/.test(ua)) {
        name = "Edge";
        version = ua.match(/Edg\/(\d+(\.\d+)?)/)?.[1] ?? "0";
      }

      // Chrome (Desktop & Mobile)
      else if (/Chrome\/(\d+(\.\d+)?)/.test(ua)) {
        name = isMobile ? "Mobile Chrome" : "Chrome";
        version = ua.match(/Chrome\/(\d+(\.\d+)?)/)?.[1] ?? "0";
      }

      // Safari
      else if (
        /Safari\/(\d+(\.\d+)?)/.test(ua) &&
        /Version\/(\d+(\.\d+)?)/.test(ua)
      ) {
        name = isMobile ? "Mobile Safari" : "Safari";
        version = ua.match(/Version\/(\d+(\.\d+)?)/)?.[1] ?? "0";
      }

      if (!name || !supportedBrowsers.includes(name)) {
        console.warn("[Browser Compatibility] Unsupported browser:", ua);
        return false;
      }

      const majorVersion = VersionService.getMajorVersionFromVersion(version);

      const isCompatible =
        (["Chrome", "Mobile Chrome"].includes(name) && majorVersion >= 83) ||
        (["Safari", "Mobile Safari"].includes(name) && majorVersion >= 14) ||
        (name === "Edge" && majorVersion >= 118);

      console.log(
        `[Browser Compatibility] ${name} v${majorVersion} compatible: ${isCompatible}`
      );

      return isCompatible;
    } catch (error) {
      console.error(
        "BrowserCompatilibilityService ~ native check failed:",
        error
      );
      return false;
    }
  }
}
