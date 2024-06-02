export namespace EnvDetect {
  export enum environment {
    NoTauri = 0,
    TauriV1 = 1,
    TauriV2 = 2,
  }

  export function isTauri(): environment {
    if (window.__TAURI_IPC__) return environment.TauriV1;
    if (window.__TAURI_INTERNALS__) return environment.TauriV2;
    return environment.NoTauri;
  }
}
