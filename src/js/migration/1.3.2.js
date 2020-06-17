window.migrationProcess = window.migrationProcess || [];

/**
 * Project settings got reorganized, logically and visually
 */
window.migrationProcess.push({
    version: '1.3.2',
    process: project => new Promise(resolve => {
        const s = project.settings;

        s.rendering = s.rendering || {
            maxFPS: s.maxFPS || 60,
            pixelatedrender: s.pixelatedrender || false,
            highDensity: s.highDensity === (void 0) ? true : s.highDensity,
            usePixiLegacy: s.usePixiLegacy === (void 0) ? true : s.usePixiLegacy,
            desktopMode: s.desktopMode || 'maximized'
        };
        delete s.maxFPS;
        delete s.fps; // A legacy config that was relevant prior to v1.
        delete s.pixelatedrender;
        delete s.highDensity;
        delete s.usePixiLegacy;
        delete s.desktopMode;

        s.authoring = s.authoring || {
            title: s.title,
            author: s.author,
            site: s.site,
            version: s.version,
            versionPostfix: s.versionPostfix
        };
        delete s.title;
        delete s.author;
        delete s.site;
        delete s.version;
        delete s.versionPostfix;

        delete s.minifyhtmlcss; // Now doesn't have an option, HTML and CSS are always minified.
        delete s.minifyjs; // This one never worked properly.

        resolve();
    })
});