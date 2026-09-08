//#region src/constants.ts
/**
* Scenery Module Constants
* Centralized location for all magic strings, numbers, and configuration values
*/
/** Module identifier used throughout Foundry VTT */
var MODULE_ID = "scenery";
/** Flag key used to store scenery data in scene documents */
var FLAG_KEY = "data";
/** Icon classes used in the UI */
var ICONS = {
	APP: "fas fa-images",
	PREVIEW: "fa fa-eye",
	DELETE: "fa fa-trash",
	ADD: "fa fa-plus",
	SCAN: "fas fa-search",
	OK: "fa fa-check",
	COPY: "fa fa-copy",
	RESET: "fa fa-undo",
	HAS_DATA: "fa fa-check-circle",
	INFO: "fa fa-info-circle",
	LIGHTBULB: "fa fa-lightbulb",
	VOLUME: "fa fa-volume-up",
	TILES: "fa fa-th",
	WALLS: "fa fa-vector-square",
	DRAWINGS: "fa fa-pencil-alt",
	REGIONS: "fa fa-draw-polygon",
	NOTES: "fa fa-bookmark",
	CLEAR: "fa fa-trash",
	CANCEL: "fa fa-times"
};
/** Variation names and defaults */
var VARIATIONS = { DEFAULT_NAME: "Default" };
/** Window/dialog configuration */
var WINDOW = {
	WIDTH: 900,
	HEIGHT: "auto",
	MIN_HEIGHT_CONTENT: 300,
	MIN_HEIGHT_WINDOW: 350,
	MAX_HEIGHT_WINDOW: "80vh",
	MAX_HEIGHT_TABLE: "60vh",
	ICON: "fas fa-images",
	CLASSES: ["scenery"]
};
/** Settings keys */
var SETTINGS = {
	DEBUG_LOGGING: "debugLogging",
	GLOBAL_LIGHTS: "globalLights",
	GLOBAL_SOUNDS: "globalSounds",
	GLOBAL_TILES: "globalTiles",
	GLOBAL_WALLS: "globalWalls",
	GLOBAL_DRAWINGS: "globalDrawings",
	GLOBAL_REGIONS: "globalRegions",
	GLOBAL_NOTES: "globalNotes",
	SHOW_VARIATIONS_LABEL: "showVariationsLabel",
	SHOW_HEADER_BUTTON: "showHeaderButton",
	GM_MAP_IDENTIFIERS: "gmMapIdentifiers",
	PLAYER_MAP_IDENTIFIERS: "playerMapIdentifiers"
};
/** CSS Selectors used in the UI */
var SELECTORS = {
	BUTTON_FILE_PICKER: "button.file-picker",
	INPUT_TEXT: "input[type=\"text\"]"
};
/** Template paths */
var TEMPLATES = {
	SCENERY: "/modules/scenery/templates/scenery.hbs",
	VARIATION: "/modules/scenery/templates/variation.hbs",
	COPY_DIALOG: "/modules/scenery/templates/copy-dialog.hbs",
	FOOTER: "templates/generic/form-footer.hbs"
};
/** Button labels (i18n keys) */
var I18N_KEYS = {
	APP_NAME: "SCENERY.APP_NAME",
	BUTTON_SCAN: "SCENERY.BUTTON_SCAN",
	BUTTON_ADD: "SCENERY.BUTTON_ADD",
	BUTTON_OK: "SCENERY.BUTTON_OK",
	BUTTON_COPY: "SCENERY.BUTTON_COPY",
	BUTTON_CANCEL: "SCENERY.BUTTON_CANCEL",
	LABEL_COPY: "SCENERY.LABEL_COPY",
	COPY_SELECT_SOURCE: "SCENERY.COPY_SELECT_SOURCE",
	COPY_SELECT_SOURCE_PLACEHOLDER: "SCENERY.COPY_SELECT_SOURCE_PLACEHOLDER",
	COPY_SELECT_ELEMENTS: "SCENERY.COPY_SELECT_ELEMENTS",
	ELEMENT_LIGHTS: "SCENERY.ELEMENT_LIGHTS",
	ELEMENT_SOUNDS: "SCENERY.ELEMENT_SOUNDS",
	ELEMENT_TILES: "SCENERY.ELEMENT_TILES",
	ELEMENT_WALLS: "SCENERY.ELEMENT_WALLS",
	SELECT_ALL: "SCENERY.SELECT_ALL",
	SELECT_NONE: "SCENERY.SELECT_NONE",
	ERROR_SELECTION: "SCENERY.ERROR_SELECTION",
	ERROR_COPY_DEFAULT: "SCENERY.ERROR_COPY_DEFAULT",
	ERROR_NO_SELECTION: "SCENERY.ERROR_NO_SELECTION",
	ERROR_NO_SOURCE: "SCENERY.ERROR_NO_SOURCE",
	SUCCESS_COPY: "SCENERY.SUCCESS_COPY",
	LOADING: "SCENERY.LOADING",
	SETTING_DEBUG_LOGGING: "SCENERY.SETTING_DEBUG_LOGGING",
	SETTING_DEBUG_LOGGING_HINT: "SCENERY.SETTING_DEBUG_LOGGING_HINT",
	SETTING_SHOW_VARIATIONS: "SCENERY.SETTING_SHOW_VARIATIONS",
	SETTING_SHOW_VARIATIONS_HINT: "SCENERY.SETTING_SHOW_VARIATIONS_HINT",
	SETTING_SHOW_HEADER_BUTTON: "SCENERY.SETTING_SHOW_HEADER_BUTTON",
	SETTING_SHOW_HEADER_BUTTON_HINT: "SCENERY.SETTING_SHOW_HEADER_BUTTON_HINT",
	SETTING_GLOBAL_LIGHTS: "SCENERY.SETTING_GLOBAL_LIGHTS",
	SETTING_GLOBAL_LIGHTS_HINT: "SCENERY.SETTING_GLOBAL_LIGHTS_HINT",
	SETTING_GLOBAL_SOUNDS: "SCENERY.SETTING_GLOBAL_SOUNDS",
	SETTING_GLOBAL_SOUNDS_HINT: "SCENERY.SETTING_GLOBAL_SOUNDS_HINT",
	SETTING_GLOBAL_TILES: "SCENERY.SETTING_GLOBAL_TILES",
	SETTING_GLOBAL_TILES_HINT: "SCENERY.SETTING_GLOBAL_TILES_HINT",
	SETTING_GLOBAL_WALLS: "SCENERY.SETTING_GLOBAL_WALLS",
	SETTING_GLOBAL_WALLS_HINT: "SCENERY.SETTING_GLOBAL_WALLS_HINT",
	SETTING_GLOBAL_DRAWINGS: "SCENERY.SETTING_GLOBAL_DRAWINGS",
	SETTING_GLOBAL_DRAWINGS_HINT: "SCENERY.SETTING_GLOBAL_DRAWINGS_HINT",
	SETTING_GLOBAL_REGIONS: "SCENERY.SETTING_GLOBAL_REGIONS",
	SETTING_GLOBAL_REGIONS_HINT: "SCENERY.SETTING_GLOBAL_REGIONS_HINT",
	SETTING_GLOBAL_NOTES: "SCENERY.SETTING_GLOBAL_NOTES",
	SETTING_GLOBAL_NOTES_HINT: "SCENERY.SETTING_GLOBAL_NOTES_HINT",
	SETTING_GM_MAP_IDENTIFIERS: "SCENERY.SETTING_GM_MAP_IDENTIFIERS",
	SETTING_GM_MAP_IDENTIFIERS_HINT: "SCENERY.SETTING_GM_MAP_IDENTIFIERS_HINT",
	SETTING_PLAYER_MAP_IDENTIFIERS: "SCENERY.SETTING_PLAYER_MAP_IDENTIFIERS",
	SETTING_PLAYER_MAP_IDENTIFIERS_HINT: "SCENERY.SETTING_PLAYER_MAP_IDENTIFIERS_HINT",
	SETTING_GLOBAL_RESET: "SCENERY.SETTING_GLOBAL_RESET",
	SETTING_GLOBAL_RESET_DONE: "SCENERY.SETTING_GLOBAL_RESET_DONE",
	BUTTON_ABOUT: "SCENERY.BUTTON_ABOUT",
	ABOUT_TITLE: "SCENERY.ABOUT_TITLE"
};
//#endregion
//#region src/helpers.ts
/**
* Get a module setting value
* @param key - Setting key from SETTINGS constant
* @returns The setting value, or undefined if not available
*/
function getSetting(key) {
	try {
		return game.settings?.get(MODULE_ID, key);
	} catch {
		return;
	}
}
/**
* Get which element types are managed by variations (not global).
* Returns a SceneElementSelection where true = variation-managed.
*/
function getVariationManagedSelection() {
	return {
		lights: !getSetting(SETTINGS.GLOBAL_LIGHTS),
		sounds: !getSetting(SETTINGS.GLOBAL_SOUNDS),
		tiles: !getSetting(SETTINGS.GLOBAL_TILES),
		walls: !getSetting(SETTINGS.GLOBAL_WALLS),
		drawings: !getSetting(SETTINGS.GLOBAL_DRAWINGS),
		regions: !getSetting(SETTINGS.GLOBAL_REGIONS),
		notes: !getSetting(SETTINGS.GLOBAL_NOTES)
	};
}
/**
* Check if debug logging is enabled
* @returns true if debug logging is enabled via setting or CONFIG.debug.scenery
*/
function isDebugEnabled() {
	try {
		if (game.settings?.get("scenery", SETTINGS.DEBUG_LOGGING)) return true;
	} catch {}
	return CONFIG.debug?.scenery ?? false;
}
/**
* Clean a file path by trimming whitespace and removing trailing commas
* @param path - Path to clean
* @returns Cleaned path string
*/
function cleanPath(path) {
	if (typeof path !== "string" || !path) return "";
	return path.trim().replace(/,+$/, "");
}
/**
* Prints formatted console msg if string, otherwise dumps object
* @param data - Output to be dumped
* @param force - Log output even if debug logging is disabled
*/
function log(data, force = false) {
	if (isDebugEnabled() || force) {
		if (typeof data === "string") console.log(`Scenery | ${data}`);
		else console.log(data);
	}
}
/**
* Get scenery data from a scene's flags
* Automatically migrates legacy data format if detected
* @param scene - The scene to get data from
* @returns Scenery data or undefined if not set
*/
function getSceneryData(scene) {
	if (!scene) return void 0;
	const data = (scene.flags?.[MODULE_ID])?.[FLAG_KEY];
	if (!data) return void 0;
	if (isLegacyData(data)) {
		log("[MIGRATION] Detected legacy scenery data, migrating...");
		return migrateSceneryData(data);
	}
	return data;
}
/**
* Set scenery data on a scene's flags
* @param scene - The scene to set data on
* @param data - The scenery data to set
*/
async function setSceneryData(scene, data) {
	if (!scene) return;
	const cleanData = {
		activeVariationIndex: data.activeVariationIndex,
		variations: data.variations,
		bg: null,
		gm: null,
		pl: null,
		defaultSceneData: null
	};
	await scene.setFlag(MODULE_ID, FLAG_KEY, cleanData);
}
/**
* Get the active variation from scenery data
* @param data - Scenery data
* @returns The active Variation or undefined if not found
*/
function getActiveVariation(data) {
	return data.variations[data.activeVariationIndex];
}
/**
* Get the appropriate image for the current user (GM or Player)
* @param data - Scenery data containing variations
* @returns The image path for the current user's role
*/
function getUserImage(data) {
	const variation = getActiveVariation(data);
	if (!variation) return "";
	return game.user?.isGM ? variation.gmBackground : variation.plBackground;
}
/**
* Capture scene elements from the current scene
* @param scene - The scene to capture from (defaults to canvas.scene)
* @param selection - Optional selection of which element types to capture
* @returns Captured scene element data or null if no scene available
*/
function captureSceneElements(scene, selection = {
	lights: true,
	sounds: true,
	tiles: true,
	walls: true,
	drawings: true,
	regions: true,
	notes: true
}) {
	const targetScene = scene || canvas?.scene;
	if (!targetScene) return null;
	return {
		lights: selection.lights ? Array.from(targetScene.lights).map((light) => light.toObject()) : [],
		sounds: selection.sounds ? Array.from(targetScene.sounds).map((sound) => sound.toObject()) : [],
		tiles: selection.tiles ? Array.from(targetScene.tiles).map((tile) => tile.toObject()) : [],
		walls: selection.walls ? Array.from(targetScene.walls).map((wall) => wall.toObject()) : [],
		drawings: selection.drawings ? Array.from(targetScene.drawings).map((drawing) => drawing.toObject()) : [],
		regions: selection.regions ? Array.from(targetScene.regions).map((region) => region.toObject()) : [],
		notes: selection.notes ? Array.from(targetScene.notes).map((note) => note.toObject()) : []
	};
}
/**
* Restore scene elements to the scene
* @param scene - The scene to restore to
* @param sceneData - The scene element data to restore
* @param selection - Optional selection of which element types to restore.
*   If a type is false (= global), restoreDocumentType is skipped for that type.
* @returns True if successful, false otherwise
*/
async function restoreSceneElements(scene, sceneData, selection) {
	if (!scene) return false;
	try {
		log("Restoring scene elements...");
		if (!selection || selection.lights !== false) await restoreDocumentType(scene, "AmbientLight", sceneData.lights);
		if (!selection || selection.sounds !== false) await restoreDocumentType(scene, "AmbientSound", sceneData.sounds);
		if (!selection || selection.tiles !== false) await restoreDocumentType(scene, "Tile", sceneData.tiles);
		if (!selection || selection.walls !== false) await restoreDocumentType(scene, "Wall", sceneData.walls);
		if (!selection || selection.drawings !== false) await restoreDocumentType(scene, "Drawing", sceneData.drawings);
		if (!selection || selection.regions !== false) await restoreDocumentType(scene, "Region", sceneData.regions);
		if (!selection || selection.notes !== false) await restoreDocumentType(scene, "Note", sceneData.notes);
		log("Scene elements restored successfully");
		return true;
	} catch (error) {
		console.error("Scenery | Error restoring scene elements:", error);
		return false;
	}
}
/**
* Restore a specific document type using differential updates
* @param scene - The scene to update
* @param documentType - Type of embedded document
* @param targetDocs - Target documents to restore
*/
async function restoreDocumentType(scene, documentType, targetDocs) {
	const collectionName = documentType === "AmbientLight" ? "lights" : documentType === "AmbientSound" ? "sounds" : documentType === "Tile" ? "tiles" : documentType === "Wall" ? "walls" : documentType === "Drawing" ? "drawings" : documentType === "Region" ? "regions" : documentType === "Note" ? "notes" : "walls";
	const collection = scene[collectionName];
	if (!collection) {
		log(`WARNING: Collection "${collectionName}" not found for ${documentType}!`);
		return;
	}
	log(`Restoring ${documentType} (collection: ${collectionName}, current: ${collection.size}, target: ${targetDocs.length})`);
	const currentIds = Array.from(collection).map((doc) => doc.id);
	if (currentIds.length === 0 && targetDocs.length === 0) {
		log(`${documentType}: nothing to do (both empty)`);
		return;
	}
	const sceneDoc = scene;
	if (currentIds.length > 0) {
		log(`Deleting ${currentIds.length} ${documentType} documents`);
		await sceneDoc.deleteEmbeddedDocuments(documentType, currentIds);
	}
	if (targetDocs.length > 0) {
		log(`Creating ${targetDocs.length} ${documentType} documents`);
		const docsWithoutIds = targetDocs.map((doc) => {
			const { _id, ...rest } = doc;
			return rest;
		});
		await sceneDoc.createEmbeddedDocuments(documentType, docsWithoutIds);
	}
	log(`${documentType}: ${currentIds.length} deleted, ${targetDocs.length} created`);
}
/**
* Check if a variation has captured scene data
* @param variation - The variation to check
* @returns True if the variation has scene data
*/
function hasSceneData(variation) {
	return Boolean(variation.sceneData && (variation.sceneData.lights.length > 0 || variation.sceneData.sounds.length > 0 || variation.sceneData.tiles.length > 0 || variation.sceneData.walls.length > 0 || variation.sceneData.drawings.length > 0 || variation.sceneData.regions.length > 0 || variation.sceneData.notes.length > 0));
}
/**
* Get a summary string of captured scene data
* @param sceneData - The scene data to summarize
* @returns Human-readable summary string
*/
function getSceneDataSummary(sceneData) {
	if (!sceneData) return "";
	const parts = [];
	if (sceneData.lights.length > 0) parts.push(`${sceneData.lights.length} lights`);
	if (sceneData.sounds.length > 0) parts.push(`${sceneData.sounds.length} sounds`);
	if (sceneData.tiles.length > 0) parts.push(`${sceneData.tiles.length} tiles`);
	if (sceneData.walls.length > 0) parts.push(`${sceneData.walls.length} walls`);
	if (sceneData.drawings.length > 0) parts.push(`${sceneData.drawings.length} drawings`);
	if (sceneData.regions.length > 0) parts.push(`${sceneData.regions.length} regions`);
	if (sceneData.notes.length > 0) parts.push(`${sceneData.notes.length} notes`);
	return parts.join(", ") || "No elements";
}
/**
* Parse a comma-separated identifier string into an array of lowercase tokens.
* Empty input returns an empty array (disables detection).
* @param value - Comma-separated string of identifiers
* @returns Deduplicated array of lowercase tokens
*/
function parseIdentifiers(value) {
	if (!value || !value.trim()) return [];
	const seen = /* @__PURE__ */ new Set();
	return value.split(",").map((s) => s.trim().toLowerCase()).filter((s) => {
		if (!s || seen.has(s)) return false;
		seen.add(s);
		return true;
	});
}
/**
* Classify a map file as GM, Player, or Neutral based on token matching.
* Splits the filename by separators and checks each token against identifier lists.
* GM identifiers take priority over Player if both match.
* @param fileName - Base filename without extension
* @param gmIds - Lowercase GM identifier tokens
* @param plIds - Lowercase Player identifier tokens
* @returns Classification result with matched token
*/
function classifyMapFile(fileName, gmIds, plIds) {
	const tokens = fileName.split(/[-_ .]+/);
	for (const token of tokens) {
		const lower = token.toLowerCase();
		if (gmIds.includes(lower)) return {
			category: "gm",
			matchedToken: token
		};
	}
	for (const token of tokens) {
		const lower = token.toLowerCase();
		if (plIds.includes(lower)) return {
			category: "player",
			matchedToken: token
		};
	}
	return { category: "neutral" };
}
/**
* Remove a matched token and its adjacent separator from a filename.
* Preserves the rest of the filename structure.
* @param fileName - Base filename without extension
* @param token - The token to remove (case-insensitive)
* @returns Filename with the token and one adjacent separator removed
*/
function removeTokenFromFileName(fileName, token) {
	const parts = fileName.split(/([-_ .])/);
	const tokenLower = token.toLowerCase();
	let tokenIndex = -1;
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];
		if (part && part.toLowerCase() === tokenLower) {
			tokenIndex = i;
			break;
		}
	}
	if (tokenIndex === -1) return fileName;
	const result = [...parts];
	result.splice(tokenIndex, 1);
	const preceding = tokenIndex > 0 ? result[tokenIndex - 1] : void 0;
	const following = tokenIndex < result.length ? result[tokenIndex] : void 0;
	if (preceding && /^[-_ .]$/.test(preceding)) result.splice(tokenIndex - 1, 1);
	else if (following && /^[-_ .]$/.test(following)) result.splice(tokenIndex, 1);
	return result.join("");
}
/**
* Normalize a filename for pairing by splitting into lowercase tokens and joining with underscore.
* @param fileName - Base filename without extension
* @returns Normalized key string
*/
function normalizeForPairing(fileName) {
	return fileName.split(/[-_ .]+/).map((s) => s.toLowerCase()).filter((s) => s.length > 0).join("_");
}
/**
* Compute a clean grouping key by normalizing and removing the matched token.
* Used for grouping GM/Player files that should be paired together.
* @param fileName - Base filename without extension
* @param token - The token to remove (will be lowercased)
* @returns Clean key string for grouping
*/
function computeCleanKey(fileName, token) {
	const tokenLower = token.toLowerCase();
	return fileName.split(/[-_ .]+/).map((s) => s.toLowerCase()).filter((s) => s.length > 0 && s !== tokenLower).join("_");
}
/**
* Check if scenery data is in legacy format
* @param data - Data to check
* @returns True if data is in legacy format
*/
function isLegacyData(data) {
	if (!data || typeof data !== "object") return false;
	if ("activeVariationIndex" in data) return false;
	return "bg" in data && "gm" in data && "pl" in data;
}
/**
* Migrate legacy scenery data to new format
* @param oldData - Legacy scenery data
* @returns Migrated SceneryData
*/
function migrateSceneryData(oldData) {
	const gmPath = cleanPath(oldData.gm);
	const bgPath = cleanPath(oldData.bg);
	const variations = [{
		name: "Default",
		gmBackground: bgPath,
		plBackground: bgPath,
		sceneData: oldData.defaultSceneData
	}];
	let activeIndex = 0;
	if (oldData.variations && Array.isArray(oldData.variations)) oldData.variations.forEach((v, i) => {
		const filePath = cleanPath(v.file);
		variations.push({
			name: v.name || `Variation ${i + 1}`,
			gmBackground: filePath,
			plBackground: filePath,
			sceneData: v.sceneData
		});
		if (filePath === gmPath) activeIndex = i + 1;
	});
	log(`[MIGRATION] Migrated ${oldData.variations?.length || 0} variations, activeIndex=${activeIndex}`);
	return {
		activeVariationIndex: activeIndex,
		variations
	};
}
//#endregion
//#region src/classes/CopyDialog.ts
/**
* Copy Dialog for copying scene elements between variations
* Uses Foundry VTT v13 DialogV2 API
*/
var CopyDialog = class CopyDialog extends foundry.applications.api.DialogV2 {
	config;
	constructor(config, content) {
		super({
			window: {
				title: `${game.i18n?.localize(I18N_KEYS.BUTTON_COPY)}: ${config.targetVariation.name}`,
				icon: "fa fa-copy"
			},
			position: { width: 400 },
			content,
			buttons: [{
				action: "copy",
				label: game.i18n?.localize(I18N_KEYS.BUTTON_COPY) ?? "Copy",
				icon: "fa-solid fa-copy",
				callback: (_event, button) => this.#handleCopy(button.form)
			}, {
				action: "cancel",
				label: game.i18n?.localize(I18N_KEYS.BUTTON_CANCEL) ?? "Cancel",
				icon: "fa-solid fa-times"
			}],
			modal: true
		});
		this.config = config;
	}
	/**
	* Attach event listeners after render
	*/
	async _onRender(_context, _options) {
		await super._onRender(_context, _options);
		this.element.querySelector("[data-action=\"select-all\"]")?.addEventListener("click", () => this.#selectAll());
		this.element.querySelector("[data-action=\"select-none\"]")?.addEventListener("click", () => this.#selectNone());
	}
	/**
	* Select all checkboxes
	*/
	#selectAll() {
		this.element.querySelectorAll("input[type=\"checkbox\"]").forEach((cb) => {
			cb.checked = true;
		});
	}
	/**
	* Select none checkboxes
	*/
	#selectNone() {
		this.element.querySelectorAll("input[type=\"checkbox\"]").forEach((cb) => {
			cb.checked = false;
		});
	}
	/**
	* Handle copy button click
	*/
	async #handleCopy(form) {
		if (!form) return;
		const formData = new FormData(form);
		const sourceIndexStr = formData.get("sourceVariation");
		if (!sourceIndexStr) {
			ui.notifications?.warn(game.i18n?.localize(I18N_KEYS.ERROR_NO_SOURCE) ?? "Select a source variation");
			return;
		}
		const sourceIndex = parseInt(sourceIndexStr);
		const sourceVariation = this.config.sceneryApp.variations?.[sourceIndex];
		if (!sourceVariation) return;
		const scene = this.config.sceneryApp.document;
		const sceneryData = getSceneryData(scene);
		log(`[COPY] sceneryData exists: ${!!sceneryData}`);
		if (!sceneryData) return;
		log(`[COPY] sceneryData.variations: ${sceneryData.variations.map((v, i) => `[${i}] gm="${cleanPath(v.gmBackground)}" hasSceneData=${!!v.sceneData}`).join(", ")}`);
		let sourceSceneData = sceneryData.variations[sourceIndex]?.sceneData;
		if (sourceIndex === sceneryData.activeVariationIndex && canvas?.scene?.id === scene.id) {
			sourceSceneData = captureSceneElements(canvas.scene, getVariationManagedSelection()) ?? void 0;
			log(`[COPY] Source is active variation - captured live scene data`);
		}
		log(`[COPY] Source is variation at index ${sourceIndex}, sourceSceneData exists: ${!!sourceSceneData}`);
		if (!sourceSceneData) {
			ui.notifications?.warn(`Source variation "${sourceVariation.name}" has no data to copy`);
			return;
		}
		log(`[COPY] sourceSceneData: ${getSceneDataSummary(sourceSceneData)}`);
		log(`[COPY] targetVariationIndex: ${this.config.targetVariationIndex}`);
		const selection = {
			lights: formData.get("lights") === "on",
			sounds: formData.get("sounds") === "on",
			tiles: formData.get("tiles") === "on",
			walls: formData.get("walls") === "on",
			drawings: formData.get("drawings") === "on",
			regions: formData.get("regions") === "on",
			notes: formData.get("notes") === "on"
		};
		const resetUnselected = formData.get("resetUnselected") === "on";
		log(`[COPY] Selection: ${Object.entries(selection).map(([k, v]) => `${k}=${v}`).join(", ")}, resetUnselected=${resetUnselected}`);
		if (!Object.values(selection).some((v) => v)) {
			ui.notifications?.warn(game.i18n?.localize(I18N_KEYS.ERROR_NO_SELECTION) ?? "Select at least one element type");
			return;
		}
		const targetVariationInData = sceneryData.variations[this.config.targetVariationIndex];
		log(`[COPY] Looking for target at index ${this.config.targetVariationIndex}`);
		log(`[COPY] targetVariationInData exists: ${!!targetVariationInData}, gm: ${targetVariationInData ? cleanPath(targetVariationInData.gmBackground) : "N/A"}`);
		if (!targetVariationInData) {
			log(`[COPY] ERROR: Target variation not found! sceneryData.variations.length=${sceneryData.variations.length}`);
			ui.notifications?.error("Target variation not found in scene data");
			return;
		}
		if (!targetVariationInData.sceneData) targetVariationInData.sceneData = {
			lights: [],
			sounds: [],
			tiles: [],
			walls: [],
			drawings: [],
			regions: [],
			notes: []
		};
		if (resetUnselected) {
			if (!selection.lights) targetVariationInData.sceneData.lights = [];
			if (!selection.sounds) targetVariationInData.sceneData.sounds = [];
			if (!selection.tiles) targetVariationInData.sceneData.tiles = [];
			if (!selection.walls) targetVariationInData.sceneData.walls = [];
			if (!selection.drawings) targetVariationInData.sceneData.drawings = [];
			if (!selection.regions) targetVariationInData.sceneData.regions = [];
			if (!selection.notes) targetVariationInData.sceneData.notes = [];
		}
		if (selection.lights) targetVariationInData.sceneData.lights = JSON.parse(JSON.stringify(sourceSceneData.lights));
		if (selection.sounds) targetVariationInData.sceneData.sounds = JSON.parse(JSON.stringify(sourceSceneData.sounds));
		if (selection.tiles) targetVariationInData.sceneData.tiles = JSON.parse(JSON.stringify(sourceSceneData.tiles));
		if (selection.walls) targetVariationInData.sceneData.walls = JSON.parse(JSON.stringify(sourceSceneData.walls));
		if (selection.drawings) targetVariationInData.sceneData.drawings = JSON.parse(JSON.stringify(sourceSceneData.drawings));
		if (selection.regions) targetVariationInData.sceneData.regions = JSON.parse(JSON.stringify(sourceSceneData.regions));
		if (selection.notes) targetVariationInData.sceneData.notes = JSON.parse(JSON.stringify(sourceSceneData.notes));
		log(`[COPY] About to save. targetVariationInData.sceneData: ${getSceneDataSummary(targetVariationInData.sceneData)}`);
		log(`[COPY] sceneryData.variations after copy: ${sceneryData.variations.map((v, i) => `[${i}] gm="${cleanPath(v.gmBackground)}" hasSceneData=${!!v.sceneData} summary="${v.sceneData ? getSceneDataSummary(v.sceneData) : "none"}"`).join(", ")}`);
		await setSceneryData(scene, sceneryData);
		log(`[COPY] VERIFY after save: ${getSceneryData(scene)?.variations.map((v, i) => `[${i}] gm="${cleanPath(v.gmBackground)}" hasSceneData=${!!v.sceneData}`).join(", ")}`);
		const summary = getSceneDataSummary(targetVariationInData.sceneData);
		ui.notifications?.info(game.i18n?.format(I18N_KEYS.SUCCESS_COPY, { summary }) || `Copied: ${summary}`);
		this.close();
		this.config.sceneryApp.render();
	}
	/**
	* Static method to show the dialog
	*/
	static async show(config) {
		const managed = getVariationManagedSelection();
		const content = await foundry.applications.handlebars.renderTemplate(TEMPLATES.COPY_DIALOG, {
			targetVariationName: config.targetVariation.name,
			sourceVariations: config.sourceVariations,
			managed
		});
		new CopyDialog(config, content).render(true);
	}
};
//#endregion
//#region src/classes/Scenery.ts
var { HandlebarsApplicationMixin, DocumentSheetV2 } = foundry.applications.api;
/**
* Cast a Scene to access the v14 Level API (firstLevel).
* Returns undefined if the scene is nullish.
*/
function v14(scene) {
	if (!scene) return void 0;
	return scene;
}
var BaseClass = HandlebarsApplicationMixin(DocumentSheetV2);
var Scenery = class Scenery extends BaseClass {
	activeVariationIndex = 0;
	variations = [];
	constructor(options = {}) {
		const sceneId = options.document?.id || options.sceneId;
		const scene = options.document || (sceneId ? game.scenes?.get(sceneId) : void 0);
		super({
			document: scene,
			...options
		});
	}
	static DEFAULT_OPTIONS = {
		classes: WINDOW.CLASSES,
		position: {
			width: WINDOW.WIDTH,
			height: WINDOW.HEIGHT
		},
		actions: {
			preview: Scenery.#onPreview,
			scan: Scenery.#onScan,
			add: Scenery.#onAdd,
			"copy-open": Scenery.#onCopyOpen,
			"reset-scene-data": Scenery.#onResetSceneData,
			delete: Scenery.#onDelete,
			about: Scenery.#onAbout
		},
		form: {
			handler: function(...args) {
				return this._onFormSubmit(...args);
			},
			submitOnChange: false,
			closeOnSubmit: true
		},
		window: {
			icon: WINDOW.ICON,
			resizable: true,
			contentClasses: ["standard-form"]
		},
		tag: "form"
	};
	static PARTS = {
		form: { template: TEMPLATES.SCENERY },
		footer: { template: TEMPLATES.FOOTER }
	};
	static _loadingImage = null;
	get title() {
		return game.i18n?.localize(I18N_KEYS.APP_NAME) ?? "Scenery";
	}
	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		const flag = getSceneryData(this.document);
		log("[CONTEXT] Preparing context");
		log(`[CONTEXT] Document: ${this.document?.id} "${this.document?.name}"`);
		log(`[CONTEXT] Background.src: ${v14(this.document)?.firstLevel?.background?.src}`);
		log(`[CONTEXT] Flag exists: ${!!flag}`);
		const currentBackground = this.getCurrentBackground();
		log(`[CONTEXT] getCurrentBackground(): ${currentBackground}`);
		if (flag) {
			log(`[CONTEXT] Flag: activeVariationIndex=${flag.activeVariationIndex}, variations=${flag.variations?.length ?? 0}`);
			flag.variations?.forEach((v, i) => {
				log(`[CONTEXT] Flag variation[${i}]: gm="${v.gmBackground}", pl="${v.plBackground}"`);
			});
			this.activeVariationIndex = flag.activeVariationIndex ?? 0;
			this.variations = flag.variations ? [...flag.variations] : [];
		} else {
			this.activeVariationIndex = 0;
			this.variations = [{
				name: VARIATIONS.DEFAULT_NAME,
				gmBackground: cleanPath(currentBackground),
				plBackground: cleanPath(currentBackground)
			}];
		}
		if (this.variations.length === 0) this.variations = [{
			name: VARIATIONS.DEFAULT_NAME,
			gmBackground: cleanPath(currentBackground),
			plBackground: cleanPath(currentBackground)
		}];
		log(`[CONTEXT] Built ${this.variations.length} variations, active=${this.activeVariationIndex}`);
		context.variations = this.variations.map((v, index) => {
			const isDefault = index === 0;
			const isActive = index === this.activeVariationIndex;
			let sceneDataToCheck = v.sceneData;
			let liveCapture = false;
			if (isActive && canvas?.scene?.id === this.document?.id) {
				sceneDataToCheck = captureSceneElements(canvas.scene, getVariationManagedSelection()) ?? void 0;
				liveCapture = true;
				log(`[CONTEXT] Live capture for active variation: ${sceneDataToCheck ? getSceneDataSummary(sceneDataToCheck) : "null"}`);
			}
			return {
				...v,
				index,
				isDefault,
				isActive,
				isEmpty: !v.gmBackground && !v.plBackground,
				hasSceneData: sceneDataToCheck ? hasSceneData({
					...v,
					sceneData: sceneDataToCheck
				}) : false,
				sceneDataSummary: sceneDataToCheck ? getSceneDataSummary(sceneDataToCheck) : v.sceneData ? getSceneDataSummary(v.sceneData) : void 0,
				isLiveCapture: liveCapture
			};
		});
		context.activeVariationIndex = this.activeVariationIndex;
		context.buttons = [
			{
				type: "button",
				action: "scan",
				icon: ICONS.SCAN,
				label: I18N_KEYS.BUTTON_SCAN
			},
			{
				type: "button",
				action: "add",
				icon: ICONS.ADD,
				label: I18N_KEYS.BUTTON_ADD
			},
			{
				type: "submit",
				icon: ICONS.OK,
				label: I18N_KEYS.BUTTON_OK
			},
			{
				type: "button",
				action: "about",
				icon: ICONS.INFO,
				label: I18N_KEYS.BUTTON_ABOUT
			}
		];
		return context;
	}
	getCurrentBackground() {
		const docId = this.document?.id;
		if (!docId) return "";
		const freshDocument = game.scenes?.get(docId);
		if (!freshDocument) return "";
		log(`[CONTEXT] Fresh document background: ${v14(freshDocument)?.firstLevel?.background?.src}`);
		const flag = getSceneryData(freshDocument);
		if (flag) {
			const customBg = getUserImage(flag);
			if (customBg) return customBg;
		}
		const canvasBg = canvas?.scene?.id === docId ? v14(canvas.scene)?.firstLevel?.background?.src : void 0;
		if (canvasBg) return canvasBg;
		return v14(freshDocument)?.firstLevel?.background?.src ?? "";
	}
	static async #onPreview(_event, target) {
		const card = target.closest(".variation-card");
		const inputSelector = (target.dataset.background || "gm") === "pl" ? "input[name*=\".plBackground\"]" : "input[name*=\".gmBackground\"]";
		const url = (card?.querySelector(inputSelector))?.value?.trim();
		if (url) {
			const ImagePopoutClass = foundry.applications.apps.ImagePopout;
			new ImagePopoutClass({ src: url }).render({ force: true });
		}
	}
	/**
	* Extract base filename without extension from a path
	* @param path - File path to extract base name from
	* @returns Base filename without extension
	*/
	static #extractBaseNameFromPath(path) {
		return (path.split("/").pop() || "").split(".").slice(0, -1).join(".");
	}
	/**
	* Sort variations alphabetically by name
	* @param variations - Array of variations to sort
	* @returns Sorted variations
	*/
	static #sortVariations(variations) {
		return variations.sort((a, b) => a.name.localeCompare(b.name));
	}
	/**
	* Get the common prefix between two strings
	* @param str1 - First string
	* @param str2 - Second string
	* @returns Common prefix
	*/
	static #getCommonPrefix(str1, str2) {
		let i = 0;
		while (i < str1.length && i < str2.length && str1[i] === str2[i]) i++;
		return str1.substring(0, i);
	}
	/**
	* Check if a filename matches the base name for variation scanning.
	*
	* Uses a fuzzy matching algorithm with three strategies to identify related files:
	*
	* **Strategy 1: Contains Match**
	* The candidate filename contains the base name as a substring.
	* Example: baseName="forest" matches "forest_night", "dark_forest", "forest"
	*
	* **Strategy 2: Bidirectional Match**
	* The base name contains the candidate filename (minimum 4 characters).
	* Handles cases where the default has a longer, more specific name.
	* Example: baseName="forest_clearing_day" matches "forest", "clearing"
	*
	* **Strategy 3: Common Prefix Match (60% threshold)**
	* Both names share a significant common prefix (at least 60% of shorter name length,
	* minimum 4 characters). This catches naming variations where suffixes differ.
	* Example: baseName="tavern_interior" matches "tavern_exterior" (prefix: "tavern_")
	*
	* The 60% threshold balances between catching legitimate variations and avoiding
	* false positives from unrelated files that happen to share short prefixes.
	*
	* @param fileName - The filename to check (without path and extension)
	* @param baseName - The base filename to match against (without path and extension)
	* @returns True if the filename is a likely variation of the base
	*/
	static #isLikelyVariation(fileName, baseName) {
		const fileNameLower = fileName.toLowerCase();
		const baseNameLower = baseName.toLowerCase();
		if (fileNameLower.includes(baseNameLower)) {
			log(`[SCAN] Match (contains): "${fileName}" contains "${baseName}"`);
			return true;
		}
		if (baseNameLower.includes(fileNameLower) && fileNameLower.length > 3) {
			log(`[SCAN] Match (bidirectional): "${baseName}" contains "${fileName}"`);
			return true;
		}
		const commonPrefix = Scenery.#getCommonPrefix(fileNameLower, baseNameLower);
		const minLength = Math.min(fileNameLower.length, baseNameLower.length);
		const threshold = Math.floor(minLength * .6);
		log(`[SCAN] Prefix check: "${fileName}" vs "${baseName}" → prefix="${commonPrefix}" (${commonPrefix.length}/${minLength}, threshold=${threshold})`);
		if (commonPrefix.length >= threshold && commonPrefix.length >= 4) {
			log(`[SCAN] Match (prefix): "${fileName}" shares prefix "${commonPrefix}" with "${baseName}"`);
			return true;
		}
		log(`[SCAN] No match: "${fileName}" vs "${baseName}"`);
		return false;
	}
	static async #onScan(_event, _target) {
		const app = this;
		const path = app.element.querySelector("[name=\"variations.0.gmBackground\"]")?.value;
		if (!path) return;
		const gmIds = parseIdentifiers(getSetting(SETTINGS.GM_MAP_IDENTIFIERS) ?? "");
		const plIds = parseIdentifiers(getSetting(SETTINGS.PLAYER_MAP_IDENTIFIERS) ?? "");
		log(`[SCAN] GM identifiers: [${gmIds.join(", ")}], Player identifiers: [${plIds.join(", ")}]`);
		const existingPaths = /* @__PURE__ */ new Set();
		app.element.querySelectorAll("input[name*=\".gmBackground\"]").forEach((input) => {
			const val = input.value;
			if (val) existingPaths.add(val);
		});
		app.element.querySelectorAll("input[name*=\".plBackground\"]").forEach((input) => {
			const val = input.value;
			if (val) existingPaths.add(val);
		});
		const fp = await foundry.applications.apps.FilePicker.implementation.browse("data", path);
		const baseName = Scenery.#extractBaseNameFromPath(path);
		const classifiedFiles = [];
		for (const file of fp.files) {
			if (existingPaths.has(file)) continue;
			const fileName = Scenery.#extractBaseNameFromPath(file);
			if (!Scenery.#isLikelyVariation(fileName, baseName)) continue;
			const classification = classifyMapFile(fileName, gmIds, plIds);
			const cleanKey = classification.matchedToken ? computeCleanKey(fileName, classification.matchedToken) : normalizeForPairing(fileName);
			classifiedFiles.push({
				file,
				fileName,
				category: classification.category,
				matchedToken: classification.matchedToken,
				cleanKey
			});
			log(`[SCAN] Classified "${fileName}" as ${classification.category}${classification.matchedToken ? ` (token: ${classification.matchedToken})` : ""}, cleanKey="${cleanKey}"`);
		}
		const groups = /* @__PURE__ */ new Map();
		for (const cf of classifiedFiles) {
			if (!groups.has(cf.cleanKey)) groups.set(cf.cleanKey, {});
			const group = groups.get(cf.cleanKey);
			if (cf.category === "gm" && !group.gm) group.gm = cf;
			else if (cf.category === "player" && !group.player) group.player = cf;
			else if (cf.category === "neutral" && !group.neutral) group.neutral = cf;
		}
		const defaultClassification = classifyMapFile(baseName, gmIds, plIds);
		const defaultCleanKey = defaultClassification.matchedToken ? computeCleanKey(baseName, defaultClassification.matchedToken) : normalizeForPairing(baseName);
		log(`[SCAN] Default baseName="${baseName}", cleanKey="${defaultCleanKey}"`);
		const sceneBackground = app.element.querySelector("[name=\"variations.0.plBackground\"]")?.value ?? "";
		const variations = [];
		for (const [key, group] of groups) {
			log(`[SCAN] Group "${key}": gm=${group.gm?.fileName ?? "none"}, player=${group.player?.fileName ?? "none"}, neutral=${group.neutral?.fileName ?? "none"}`);
			if (key === defaultCleanKey) {
				if (group.gm) {
					const defaultGmInput = app.element.querySelector("[name=\"variations.0.gmBackground\"]");
					if (defaultGmInput) {
						defaultGmInput.value = group.gm.file;
						log(`[SCAN] Enhanced default gmBackground with "${group.gm.file}"`);
					}
				}
				continue;
			}
			let gmBg;
			let plBg;
			if (group.gm && group.player) {
				gmBg = group.gm.file;
				plBg = group.player.file;
			} else if (group.gm && group.neutral) {
				gmBg = group.gm.file;
				plBg = group.neutral.file;
			} else if (group.player && group.neutral) {
				gmBg = group.neutral.file;
				plBg = group.player.file;
			} else if (group.gm) {
				gmBg = group.gm.file;
				plBg = sceneBackground;
			} else if (group.player) {
				gmBg = group.player.file;
				plBg = group.player.file;
			} else if (group.neutral) {
				gmBg = group.neutral.file;
				plBg = group.neutral.file;
			} else continue;
			const bestFile = group.neutral ?? group.player ?? group.gm;
			if (!bestFile) continue;
			let nameFileName = bestFile.fileName;
			if (bestFile.matchedToken) nameFileName = removeTokenFromFileName(nameFileName, bestFile.matchedToken);
			const name = decodeURIComponent(nameFileName.replace(baseName, "")).replace(/[-_]/g, " ").replace(/\s{2,}/g, " ").trim();
			variations.push({
				name,
				gmBackground: gmBg,
				plBackground: plBg
			});
		}
		Scenery.#sortVariations(variations);
		app.removeBlankVariations();
		for (const v of variations) await app.addVariation(v.name, v.gmBackground, v.plBackground);
	}
	static async #onAdd(_event, _target) {
		await this.addVariation();
	}
	static async #onCopyOpen(_event, target) {
		const app = this;
		const variationIndex = parseInt(target.dataset.variationIndex || "0");
		if (variationIndex === 0) {
			ui.notifications?.warn(game.i18n?.localize(I18N_KEYS.ERROR_COPY_DEFAULT) ?? "Cannot copy to default variation");
			return;
		}
		await app.#syncFormDataToSceneryData();
		await app.#showCopyDialog(variationIndex);
	}
	/**
	* Sync current form data to sceneryData without closing the dialog.
	* This is used before Copy operations to ensure newly added variations
	* exist in the stored data.
	*/
	async #syncFormDataToSceneryData() {
		const form = this.element instanceof HTMLFormElement ? this.element : this.element.querySelector("form");
		if (!form) {
			log(`[SYNC] No form found, skipping sync`);
			return;
		}
		const formData = new FormData(form);
		const fd = {};
		formData.forEach((value, key) => {
			fd[key] = value;
		});
		const existingFlag = getSceneryData(this.document);
		const variations = Scenery.#parseVariationsFromFormData(fd, existingFlag);
		const activeIndex = Scenery.#getActiveVariationIndex(form);
		log(`[SYNC] Syncing ${variations.length} variations from form`);
		const validVariations = variations.filter((v) => v.gmBackground);
		if (validVariations.length === 0) {
			log(`[SYNC] No valid variations, skipping sync`);
			return;
		}
		const data = {
			activeVariationIndex: Math.min(activeIndex, validVariations.length - 1),
			variations: validVariations
		};
		const sceneBackground = cleanPath(v14(this.document)?.firstLevel?.background?.src ?? "");
		if (data.variations[0] && sceneBackground) data.variations[0].plBackground = sceneBackground;
		log(`[SYNC] Saving: ${validVariations.length} variations, activeIndex=${data.activeVariationIndex}`);
		await setSceneryData(this.document, data);
		this.variations = [...validVariations];
		this.activeVariationIndex = data.activeVariationIndex;
		log(`[SYNC] Sync complete`);
	}
	async #showCopyDialog(targetVariationIndex) {
		const targetVariation = this.variations?.[targetVariationIndex];
		if (!targetVariation) return;
		const sceneryData = getSceneryData(this.document);
		const sourceVariations = (this.variations || []).map((v, index) => ({
			...v,
			index
		})).filter((v, index) => {
			if (index === targetVariationIndex) return false;
			if (!v.gmBackground) return false;
			if (sceneryData && index === sceneryData.activeVariationIndex && canvas?.scene?.id === this.document?.id) {
				const liveData = captureSceneElements(canvas.scene ?? void 0, getVariationManagedSelection());
				return liveData ? hasSceneData({
					...v,
					sceneData: liveData
				}) : false;
			}
			return hasSceneData(v);
		});
		await CopyDialog.show({
			targetVariationIndex,
			targetVariation,
			sourceVariations,
			sceneryApp: this
		});
	}
	static async #onResetSceneData(_event, target) {
		const app = this;
		const variationIndex = parseInt(target.dataset.variationIndex || "0");
		if (variationIndex === 0) {
			ui.notifications?.warn("Cannot reset default variation");
			return;
		}
		await app.#syncFormDataToSceneryData();
		const scene = app.document;
		const sceneryData = getSceneryData(scene);
		if (!sceneryData) return;
		const variationInData = sceneryData.variations[variationIndex];
		if (!variationInData || !variationInData.sceneData) return;
		if (!await foundry.applications.api.DialogV2.confirm({
			window: { title: game.i18n?.localize("SCENERY.RESET_SCENE_DATA_TITLE") ?? "Reset Scene Data" },
			content: `<p>${game.i18n?.localize("SCENERY.RESET_SCENE_DATA_CONTENT") ?? "Remove all captured scene elements for this variation?"}</p>`,
			rejectClose: false,
			modal: true
		})) return;
		delete variationInData.sceneData;
		await setSceneryData(scene, sceneryData);
		ui.notifications?.info(game.i18n?.localize("SCENERY.RESET_SCENE_DATA_SUCCESS") ?? "Reset scene data");
		app.render();
	}
	static async #onDelete(_event, target) {
		const app = this;
		const variationIndex = parseInt(target.dataset.variationIndex || "0");
		if (variationIndex === 0) return;
		await app.#syncFormDataToSceneryData();
		const scene = app.document;
		const sceneryData = getSceneryData(scene);
		if (!sceneryData) return;
		const variation = sceneryData.variations[variationIndex];
		if (!variation) {
			app.render();
			return;
		}
		const hasData = variation.sceneData && Object.values(variation.sceneData).some((arr) => arr?.length > 0);
		if (variation.name || variation.gmBackground || hasData) {
			const displayName = variation.name || variation.gmBackground || "Unknown";
			if (!await foundry.applications.api.DialogV2.confirm({
				window: { title: game.i18n?.localize("SCENERY.DELETE_VARIATION_TITLE") ?? "Delete Variation" },
				content: `<p>${game.i18n?.format("SCENERY.DELETE_VARIATION_CONTENT", { name: displayName }) ?? `Delete variation "${displayName}"?`}</p>`,
				rejectClose: false,
				modal: true
			})) return;
		}
		sceneryData.variations.splice(variationIndex, 1);
		if (sceneryData.activeVariationIndex >= variationIndex && sceneryData.activeVariationIndex > 0) sceneryData.activeVariationIndex--;
		await setSceneryData(scene, sceneryData);
		app.render();
	}
	static async #onAbout(_event, _target) {
		const title = game.i18n?.localize(I18N_KEYS.ABOUT_TITLE) ?? "About Scenery";
		const content = `
      <div style="text-align: center; padding: 8px;">
        <h2 style="margin: 0 0 4px;"><i class="${ICONS.APP}"></i> Scenery</h2>
        <p style="margin: 0 0 12px; color: var(--color-text-light-secondary);">
          Background Image Variation Manager
        </p>
        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
          <a href="https://ko-fi.com/J3J1FVK91" target="_blank"
            style="text-decoration: none; padding: 4px 12px; border-radius: 4px; background: var(--color-control-bg); border: 1px solid var(--color-border-dark-primary);">
            <i class="fas fa-coffee"></i> Ko-fi
          </a>
          <a href="https://www.patreon.com/NerdyByNatureDev" target="_blank"
            style="text-decoration: none; padding: 4px 12px; border-radius: 4px; background: var(--color-control-bg); border: 1px solid var(--color-border-dark-primary);">
            <i class="fab fa-patreon"></i> Patreon
          </a>
          <a href="https://github.com/marcstraube/foundryvtt-scenery" target="_blank"
            style="text-decoration: none; padding: 4px 12px; border-radius: 4px; background: var(--color-control-bg); border: 1px solid var(--color-border-dark-primary);">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>`;
		await foundry.applications.api.DialogV2.prompt({
			window: {
				title,
				icon: ICONS.APP
			},
			content,
			rejectClose: false,
			ok: {
				label: "OK",
				icon: ICONS.OK
			}
		});
	}
	/**
	* Parse variations from form data (new card-based format)
	* @param formData - Form data object
	* @param existingFlag - Existing scenery data to preserve sceneData from
	* @returns Array of variations
	*/
	static #parseVariationsFromFormData(formData, existingFlag) {
		const variations = [];
		let index = 0;
		log(`[PARSE] existingFlag exists: ${!!existingFlag}`);
		if (existingFlag?.variations) log(`[PARSE] existingFlag.variations: ${existingFlag.variations.map((v, i) => `[${i}] gm="${cleanPath(v.gmBackground)}" hasSceneData=${!!v.sceneData}`).join(", ")}`);
		log(`[PARSE] Form keys: ${Object.keys(formData).filter((k) => k.startsWith("variations")).join(", ")}`);
		while (formData[`variations.${index}.gmBackground`] !== void 0) {
			const rawGm = formData[`variations.${index}.gmBackground`];
			const rawPl = formData[`variations.${index}.plBackground`];
			log(`[PARSE] Raw form values for index ${index}: gm="${rawGm}", pl="${rawPl}"`);
			const variation = {
				name: (formData[`variations.${index}.name`] || (index === 0 ? VARIATIONS.DEFAULT_NAME : "")).trim(),
				gmBackground: cleanPath(rawGm),
				plBackground: cleanPath(rawPl)
			};
			log(`[PARSE] Form index ${index}: name="${variation.name}", gm="${variation.gmBackground}", pl="${variation.plBackground}"`);
			if (variation.gmBackground && existingFlag?.variations) {
				const existingVariation = existingFlag.variations.find((v) => cleanPath(v.gmBackground) === variation.gmBackground);
				log(`[PARSE] Looking for gmBackground="${variation.gmBackground}" in existingFlag: found=${!!existingVariation}, hasSceneData=${!!existingVariation?.sceneData}`);
				if (existingVariation?.sceneData) {
					variation.sceneData = existingVariation.sceneData;
					log(`[PARSE] Preserved sceneData: ${getSceneDataSummary(variation.sceneData)}`);
				}
			}
			variations.push(variation);
			index++;
		}
		log(`[PARSE] Result: ${variations.length} variations`);
		return variations;
	}
	/**
	* Get selected active variation index from form
	* @param form - HTML form element
	* @returns The active variation index
	*/
	static #getActiveVariationIndex(form) {
		const activeRadio = form.querySelector("input[name=\"activeVariation\"]:checked");
		return parseInt(activeRadio?.value || "0");
	}
	/**
	* Validate and build SceneryData from variations
	* @param variations - Array of variations
	* @param activeIndex - Active variation index
	* @returns SceneryData object or null if validation fails
	*/
	static #validateAndBuildSceneryData(variations, activeIndex) {
		log("[BUILD] Validating scenery data");
		log(`[BUILD] ${variations.length} variations, active=${activeIndex}`);
		const validVariations = variations.filter((v) => v.gmBackground);
		if (validVariations.length === 0) {
			ui.notifications?.error("No valid variations defined");
			return null;
		}
		const safeActiveIndex = Math.min(activeIndex, validVariations.length - 1);
		if (safeActiveIndex < 0) {
			ui.notifications?.error("Invalid active variation");
			return null;
		}
		log(`[BUILD] Valid variations: ${validVariations.length}, safeActiveIndex=${safeActiveIndex}`);
		return {
			activeVariationIndex: safeActiveIndex,
			variations: validVariations
		};
	}
	async _onFormSubmit(_event, form, formData, _options = {}) {
		try {
			log("[FORM] Submission started");
			const fd = formData.object;
			const existingFlag = getSceneryData(this.document);
			const variations = Scenery.#parseVariationsFromFormData(fd, existingFlag);
			const activeIndex = Scenery.#getActiveVariationIndex(form);
			const data = Scenery.#validateAndBuildSceneryData(variations, activeIndex);
			if (!data) return;
			const sceneBackground = cleanPath(v14(this.document)?.firstLevel?.background?.src ?? "");
			if (data.variations[0] && sceneBackground) data.variations[0].plBackground = sceneBackground;
			log(`[FORM] Existing flag: ${!!existingFlag}`);
			log(`[FORM] Saving: activeIndex=${data.activeVariationIndex}, vars=${data.variations.length}`);
			await setSceneryData(this.document, data);
			if (this.document?.id === canvas?.scene?.id) {
				const img = getUserImage(data);
				if (img) await Scenery.setImage(img);
				else {
					log(`[FORM] No background image, but restoring elements for active variation`);
					await Scenery.#restoreSceneElementsForActiveVariation(data);
				}
			}
		} catch (error) {
			console.error("Scenery | Error in form submission:", error);
			ui.notifications?.error(`Scenery error: ${error.message}`);
			throw error;
		}
	}
	_onRender(context, options) {
		super._onRender(context, options);
		this.element.querySelectorAll(SELECTORS.BUTTON_FILE_PICKER).forEach((button) => {
			button.addEventListener("click", this._onClickFilePicker.bind(this));
		});
	}
	async _onClickFilePicker(event) {
		event.preventDefault();
		const button = event.currentTarget;
		const input = button.parentElement?.querySelector(SELECTORS.INPUT_TEXT);
		if (!input) return;
		await new foundry.applications.apps.FilePicker.implementation({
			type: button.dataset.type ?? "imagevideo",
			current: input.value,
			callback: (path) => {
				input.value = path;
				input.dispatchEvent(new Event("change", { bubbles: true }));
			}
		}).browse();
	}
	removeBlankVariations() {
		this.element.querySelectorAll(".variation-card:not(.default)").forEach((card) => {
			const gmInput = card.querySelector("input[name*=\".gmBackground\"]");
			const nameInput = card.querySelector("input[name*=\".name\"]");
			if (gmInput && nameInput && !gmInput.value && !nameInput.value) card.remove();
		});
	}
	async addVariation(name = "", gmBackground = "", plBackground = "", id = null) {
		const container = this.element.querySelector(".variations-container");
		if (!container) return;
		if (id === null) {
			const lastCard = container.querySelector(".variation-card:last-child");
			id = (lastCard ? parseInt(lastCard.dataset.index || "-1") : -1) + 1;
		}
		if (!plBackground && gmBackground) plBackground = gmBackground;
		const templateData = {
			index: Number(id),
			name,
			gmBackground,
			plBackground,
			isEmpty: !name && !gmBackground,
			isDefault: id === 0,
			isActive: false
		};
		const cardHtml = await foundry.applications.handlebars.renderTemplate(TEMPLATES.VARIATION, templateData);
		const template = document.createElement("template");
		template.innerHTML = cardHtml;
		const card = template.content.firstElementChild;
		if (card) {
			container.appendChild(card);
			card.querySelectorAll(SELECTORS.BUTTON_FILE_PICKER).forEach((btn) => {
				btn.addEventListener("click", this._onClickFilePicker.bind(this));
			});
		}
	}
	static async setImage(img, draw = true) {
		if (!canvas?.scene) return;
		if (!game.user) return;
		const cv = canvas;
		if (cv.level && cv.scene?.firstLevel && cv.level.id !== cv.scene.firstLevel.id) return;
		if (Scenery._loadingImage === img) {
			log(`[IMAGE] Already loading: ${img}`);
			return;
		}
		const sceneryScene = canvas.scene;
		const currentBackgroundSrc = sceneryScene._sceneryCustomBackground || (v14(canvas.scene)?.firstLevel?.background?.src ?? "");
		if (!draw) {
			if (!sceneryScene._sceneryOriginalBackground) sceneryScene._sceneryOriginalBackground = v14(canvas.scene)?.firstLevel?.background?.src ?? "";
			sceneryScene._sceneryPendingBackground = img;
			sceneryScene._sceneryCustomBackground = img;
			return;
		}
		Scenery._loadingImage = img;
		if (canvas.ready && canvas.primary?.background) {
			if (!sceneryScene._sceneryOriginalBackground) sceneryScene._sceneryOriginalBackground = v14(canvas.scene)?.firstLevel?.background?.src ?? "";
			try {
				log(`[IMAGE] Loading texture: ${img} (current: ${currentBackgroundSrc}, db: ${v14(canvas.scene)?.firstLevel?.background?.src})`);
				const isActualSwitch = cleanPath(currentBackgroundSrc) !== cleanPath(img);
				const isFreshPageLoad = !sceneryScene._sceneryInitialized;
				if (isActualSwitch && game.user?.isGM && !isFreshPageLoad) {
					log(`[IMAGE] Saving elements before switch (GM)`);
					await Scenery.#saveCurrentSceneElements(currentBackgroundSrc);
				} else if (isActualSwitch && isFreshPageLoad) log(`[IMAGE] Fresh page load - skipping save, will restore only`);
				else if (isActualSwitch) log(`[IMAGE] Switching background (Player - visual only)`);
				else log(`[IMAGE] Same background (reload), skipping save/restore`);
				log(`[IMAGE] Switching to: ${img}`);
				const texture = await foundry.canvas.loadTexture(img);
				if (texture && "baseTexture" in texture && canvas.primary?.background) {
					canvas.primary.background.texture = texture;
					const sceneV14 = v14(canvas.scene);
					if (sceneV14) sceneV14.firstLevel.background.src = img;
					canvas.primary.renderDirty = true;
					canvas.app?.renderer.render(canvas.app.stage);
					sceneryScene._sceneryCustomBackground = img;
					if (isActualSwitch && !sceneryScene._sceneryPendingBackground) ui.notifications?.info(game.i18n?.localize(I18N_KEYS.LOADING) ?? "Loading...");
					if (isActualSwitch && !isFreshPageLoad) await Scenery.#restoreSceneElementsForCurrentVariation(img);
					else if (isFreshPageLoad) log(`[IMAGE] Fresh page load - keeping DB elements, not restoring`);
				}
			} catch (err) {
				console.error("Scenery | Error updating background:", err);
				ui.notifications?.error("Failed to update background image");
			} finally {
				Scenery._loadingImage = null;
			}
		} else Scenery._loadingImage = null;
	}
	/**
	* Save current scene elements (lights, walls, tiles, etc.) to the active variation.
	* Called automatically before switching to a different variation background.
	*
	* @param currentBackgroundSrc - Optional background source to save for.
	*   If not provided, uses the current canvas background.
	*/
	static async #saveCurrentSceneElements(currentBackgroundSrc) {
		if (!canvas?.scene) return;
		const data = getSceneryData(canvas.scene);
		if (!data || !data.variations || data.variations.length === 0) return;
		const currentImg = cleanPath(currentBackgroundSrc || v14(canvas.scene)?.firstLevel?.background?.src);
		log(`[SAVE] Background: "${currentImg}"`);
		log(`[SAVE] Variations: ${data.variations.map((v, i) => `[${i}] "${v.name}" gm="${cleanPath(v.gmBackground)}" pl="${cleanPath(v.plBackground)}"`).join(", ")}`);
		const currentVariation = data.variations.find((v) => cleanPath(v.gmBackground) === currentImg || cleanPath(v.plBackground) === currentImg);
		if (currentVariation) {
			const selection = getVariationManagedSelection();
			const sceneData = captureSceneElements(canvas.scene ?? void 0, selection);
			if (sceneData) {
				currentVariation.sceneData = sceneData;
				await setSceneryData(canvas.scene, data);
				log(`[SAVE] Saved elements for variation: ${currentVariation.name}`);
			}
		} else {
			log(`[SAVE] Warning: No variation found for background: "${currentImg}"`);
			log(`[SAVE] Available variation backgrounds: ${data.variations.map((v) => `gm="${cleanPath(v.gmBackground)}" pl="${cleanPath(v.plBackground)}"`).join(", ")}`);
		}
	}
	/**
	* Restore scene elements (lights, walls, tiles, etc.) for the target variation.
	* Called automatically after switching to a different variation background.
	* If the variation has no saved sceneData, clears all elements (empty state).
	*
	* @param targetBackgroundSrc - Optional background source to restore for.
	*   If not provided, uses the current canvas background.
	*/
	static async #restoreSceneElementsForCurrentVariation(targetBackgroundSrc) {
		if (!canvas?.scene) return;
		const data = getSceneryData(canvas.scene);
		if (!data || !data.variations || data.variations.length === 0) return;
		const currentImg = cleanPath(targetBackgroundSrc || v14(canvas.scene)?.firstLevel?.background?.src);
		log(`[RESTORE] Target background: "${currentImg}"`);
		const emptySceneData = {
			lights: [],
			sounds: [],
			tiles: [],
			walls: [],
			drawings: [],
			regions: [],
			notes: []
		};
		log(`[RESTORE] Looking for variation with background="${currentImg}"`);
		log(`[RESTORE] Available variations: ${data.variations.map((v, i) => `[${i}] gm="${cleanPath(v.gmBackground)}" pl="${cleanPath(v.plBackground)}" hasSceneData=${!!v.sceneData}`).join(", ")}`);
		const currentVariation = data.variations.find((v) => cleanPath(v.gmBackground) === currentImg || cleanPath(v.plBackground) === currentImg);
		if (currentVariation) {
			if (data.variations.indexOf(currentVariation) === 0 && !currentVariation.sceneData) {
				log(`[RESTORE] Default variation - no saved data, keeping current elements`);
				return;
			}
			const sceneData = currentVariation.sceneData || emptySceneData;
			log(`[RESTORE] Found variation: ${currentVariation.name}, hasSceneData=${!!currentVariation.sceneData}`);
			log(`[RESTORE] sceneData summary: ${getSceneDataSummary(sceneData)}`);
			log(`[RESTORE] Elements: ${sceneData.lights.length}L, ${sceneData.sounds.length}S, ${sceneData.tiles.length}T, ${sceneData.walls.length}W, ${sceneData.regions.length}R`);
			const selection = getVariationManagedSelection();
			await restoreSceneElements(canvas.scene, sceneData, selection);
		} else {
			log(`[RESTORE] Warning: No variation found for background: "${currentImg}"`);
			log(`[RESTORE] Comparison failed. Available backgrounds: ${data.variations.map((v) => `gm="${cleanPath(v.gmBackground)}" pl="${cleanPath(v.plBackground)}"`).join(", ")}`);
		}
	}
	/**
	* Restore scene elements for the active variation by index.
	* Used when switching variations without changing backgrounds.
	* @param sceneryData - The scenery data containing variations
	*/
	static async #restoreSceneElementsForActiveVariation(sceneryData) {
		if (!canvas?.scene) return;
		const activeVariation = sceneryData.variations[sceneryData.activeVariationIndex];
		if (!activeVariation) {
			log(`[RESTORE-ACTIVE] No active variation found at index ${sceneryData.activeVariationIndex}`);
			return;
		}
		const emptySceneData = {
			lights: [],
			sounds: [],
			tiles: [],
			walls: [],
			drawings: [],
			regions: [],
			notes: []
		};
		if (sceneryData.activeVariationIndex === 0 && !activeVariation.sceneData) {
			log(`[RESTORE-ACTIVE] Default variation without sceneData - keeping current elements`);
			return;
		}
		const sceneData = activeVariation.sceneData || emptySceneData;
		log(`[RESTORE-ACTIVE] Restoring for "${activeVariation.name}": ${getSceneDataSummary(sceneData)}`);
		const selection = getVariationManagedSelection();
		await restoreSceneElements(canvas.scene, sceneData, selection);
	}
	/**
	* Reset the canvas background to its original (database) state.
	* Removes any scenery-applied custom background and restores the scene's
	* actual background.src value. Called when leaving a scene or cleaning up.
	*/
	static async resetBackground() {
		if (!canvas?.scene) return;
		const cv = canvas;
		if (cv.level && cv.scene?.firstLevel && cv.level.id !== cv.scene.firstLevel.id) return;
		const sceneryScene = canvas.scene;
		if (!sceneryScene._sceneryOriginalBackground) return;
		const originalSrc = sceneryScene._sceneryOriginalBackground;
		if (v14(canvas.scene)?.firstLevel?.background?.src === originalSrc) {
			log("[RESET] Background already at original");
			return;
		}
		if (canvas.primary?.background) try {
			log(`[RESET] Restoring original background: ${originalSrc}`);
			const texture = await foundry.canvas.loadTexture(originalSrc);
			if (texture && "baseTexture" in texture) {
				canvas.primary.background.texture = texture;
				const sceneV14 = v14(canvas.scene);
				if (sceneV14) sceneV14.firstLevel.background.src = originalSrc;
				canvas.primary.renderDirty = true;
				canvas.app?.renderer.render(canvas.app.stage);
			}
		} catch (err) {
			console.error("Scenery | Error resetting background:", err);
		}
		delete sceneryScene._sceneryOriginalBackground;
		delete sceneryScene._sceneryCustomBackground;
	}
	static _onCanvasInit() {
		if (!canvas?.scene) return;
		const data = getSceneryData(canvas.scene);
		if (!data || !data.variations || data.variations.length === 0) return;
		const currentBackground = cleanPath(v14(canvas.scene)?.firstLevel?.background?.src);
		const expectedBackground = cleanPath(data.variations[0]?.gmBackground || "");
		log(`[INIT] current="${currentBackground}", expected="${expectedBackground}"`);
		const sceneryScene = canvas.scene;
		if (currentBackground !== expectedBackground && !sceneryScene._sceneryPendingBackground) {
			log("[INIT] Background mismatch, skipping scenery override");
			return;
		}
		const img = cleanPath(getUserImage(data));
		log(`[INIT] User image: ${img}`);
		if (img) Scenery.setImage(img, false);
	}
	static async _onCanvasReady(_canvas) {
		if (!canvas?.scene) {
			log(`[READY] No canvas.scene`);
			return;
		}
		log(`[READY] Scene: ${canvas.scene.name}`);
		const sceneryScene = canvas.scene;
		log(`[READY] Pending: ${sceneryScene._sceneryPendingBackground || "none"}`);
		if (sceneryScene._sceneryPendingBackground) {
			const pendingImg = sceneryScene._sceneryPendingBackground;
			delete sceneryScene._sceneryPendingBackground;
			log(`[READY] Applying pending: ${pendingImg}`);
			await Scenery.setImage(pendingImg);
		} else {
			const data = getSceneryData(canvas.scene);
			log(`[READY] Scenery data: ${!!data}`);
			if (data) {
				const currentBackground = cleanPath(v14(canvas.scene)?.firstLevel?.background?.src);
				const userImage = cleanPath(getUserImage(data));
				const isGM = game.user?.isGM;
				log(`[READY] isGM=${isGM}, current="${currentBackground}", userImage="${userImage}"`);
				if (userImage && userImage !== currentBackground) {
					log(`[READY] Applying user background: ${userImage}`);
					await Scenery.setImage(userImage);
				} else log(`[READY] No change needed`);
			}
		}
		sceneryScene._sceneryInitialized = true;
		log(`[READY] Scene initialized`);
	}
	/**
	* Update scenery data when background changes through scene settings
	* @param sceneryData - Current scenery data
	* @param newBackground - New background path
	* @returns Updated scenery data
	*/
	static #updateSceneryDataForBackgroundChange(sceneryData, newBackground) {
		const cleanedNewBg = cleanPath(newBackground);
		const updatedData = {
			activeVariationIndex: sceneryData.activeVariationIndex,
			variations: sceneryData.variations.map((v) => ({ ...v }))
		};
		const defaultVariation = updatedData.variations[0];
		if (defaultVariation) {
			const oldDefaultGm = cleanPath(defaultVariation.gmBackground);
			const oldDefaultPl = cleanPath(defaultVariation.plBackground);
			updatedData.variations[0] = {
				...defaultVariation,
				name: VARIATIONS.DEFAULT_NAME,
				gmBackground: oldDefaultGm === oldDefaultPl ? cleanedNewBg : defaultVariation.gmBackground,
				plBackground: cleanedNewBg
			};
		}
		return updatedData;
	}
	/**
	* Apply scenery data to the current scene if it matches
	* @param scene - Scene to check
	* @param sceneryData - Scenery data to apply
	*/
	static #applySceneryDataToCurrentScene(scene, sceneryData) {
		if (scene.id === canvas?.scene?.id) {
			const img = getUserImage(sceneryData);
			if (img) Scenery.setImage(img);
		}
	}
	static _onUpdateScene(scene, data) {
		log(`[UPDATE] Scene ${scene.id}, current=${scene.id === canvas?.scene?.id}, flag=${foundry.utils.hasProperty(data, "flags.scenery.data")}, bg=${foundry.utils.hasProperty(data, "background.src")}`);
		ui.scenes?.render();
		if (foundry.utils.hasProperty(data, "background.src")) {
			const newBackground = data.background?.src ?? "";
			const sceneryData = getSceneryData(scene);
			if (sceneryData) {
				log("[UPDATE] Background changed via scene settings, updating scenery data");
				const updatedData = Scenery.#updateSceneryDataForBackgroundChange(sceneryData, newBackground);
				setSceneryData(scene, updatedData);
				Scenery.#applySceneryDataToCurrentScene(scene, updatedData);
				return;
			}
		}
		if (scene.id !== canvas?.scene?.id) return;
		if (foundry.utils.hasProperty(data, "flags.scenery.data")) {
			const sceneryData = getSceneryData(scene);
			const img = sceneryData ? getUserImage(sceneryData) : void 0;
			log(`[UPDATE] Scenery flag changed, isGM=${game.user?.isGM}, newImg="${img}", current="${v14(canvas?.scene)?.firstLevel?.background?.src}"`);
			if (img) {
				log("[HOOK] Calling setImage from updateScene");
				Scenery.setImage(img);
			}
		}
	}
	static _onRenderSceneDirectory(_sceneDir, html) {
		if (!(game.settings.get?.("scenery", SETTINGS.SHOW_VARIATIONS_LABEL) ?? true)) return;
		const htmlElement = html;
		if (!htmlElement) {
			log("[RENDER] SceneDirectory: Invalid html parameter");
			return;
		}
		(game.scenes?.contents ?? []).filter((scene) => {
			const data = getSceneryData(scene);
			return data?.variations && data.variations.length > 1;
		}).forEach((scene) => {
			const menuEntry = htmlElement.querySelector(`[data-entry-id="${scene.id}"]`);
			if (!menuEntry) return;
			const data = getSceneryData(scene);
			if (!data?.variations) return;
			const label = document.createElement("label");
			label.classList.add("scenery-variations");
			label.innerHTML = `<i class="fa fa-images"></i> ${data.variations.length}`;
			menuEntry.prepend(label);
		});
	}
};
//#endregion
//#region src/scenery.ts
log("Module loading...", true);
window.Scenery = Scenery;
Hooks.once("init", () => {
	log("Scenery | Init");
	if (foundry?.applications?.handlebars?.loadTemplates) foundry.applications.handlebars.loadTemplates(["modules/scenery/templates/variation.hbs"]);
	const settings = game.settings;
	settings?.register(MODULE_ID, SETTINGS.DEBUG_LOGGING, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_DEBUG_LOGGING) ?? "Debug Logging",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_DEBUG_LOGGING_HINT) ?? "Show debug messages in console",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	settings?.register(MODULE_ID, SETTINGS.SHOW_HEADER_BUTTON, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_SHOW_HEADER_BUTTON) ?? "Show Header Button",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_SHOW_HEADER_BUTTON_HINT) ?? "Show Scenery button in Scene Directory header",
		scope: "world",
		config: true,
		type: Boolean,
		default: true,
		requiresReload: true
	});
	settings?.register(MODULE_ID, SETTINGS.SHOW_VARIATIONS_LABEL, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_SHOW_VARIATIONS) ?? "Show Variations Label",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_SHOW_VARIATIONS_HINT) ?? "Show variation count label",
		scope: "world",
		config: true,
		type: Boolean,
		default: true,
		requiresReload: true
	});
	settings?.register(MODULE_ID, SETTINGS.GM_MAP_IDENTIFIERS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GM_MAP_IDENTIFIERS) ?? "GM Map Identifiers",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GM_MAP_IDENTIFIERS_HINT) ?? "Comma-separated tokens that identify GM-specific maps in filenames (e.g. gm, dm).",
		scope: "world",
		config: true,
		type: String,
		default: "gm, dm"
	});
	settings?.register(MODULE_ID, SETTINGS.PLAYER_MAP_IDENTIFIERS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_PLAYER_MAP_IDENTIFIERS) ?? "Player Map Identifiers",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_PLAYER_MAP_IDENTIFIERS_HINT) ?? "Comma-separated tokens that identify Player-specific maps in filenames (e.g. player, pl).",
		scope: "world",
		config: true,
		type: String,
		default: "player, pl"
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_LIGHTS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_LIGHTS) ?? "Global Lights",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_LIGHTS_HINT) ?? "Lights stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_SOUNDS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_SOUNDS) ?? "Global Sounds",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_SOUNDS_HINT) ?? "Sounds stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_TILES, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_TILES) ?? "Global Tiles",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_TILES_HINT) ?? "Tiles stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_WALLS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_WALLS) ?? "Global Walls",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_WALLS_HINT) ?? "Walls stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_DRAWINGS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_DRAWINGS) ?? "Global Drawings",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_DRAWINGS_HINT) ?? "Drawings stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: true
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_REGIONS, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_REGIONS) ?? "Global Regions",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_REGIONS_HINT) ?? "Regions stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	settings?.register(MODULE_ID, SETTINGS.GLOBAL_NOTES, {
		name: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_NOTES) ?? "Global Notes",
		hint: game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_NOTES_HINT) ?? "Notes stay on the scene when switching variations.",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
});
Hooks.on("getSceneContextOptions", (_app, menuItems) => {
	menuItems.push({
		label: game.i18n?.localize(I18N_KEYS.APP_NAME) ?? "Scenery",
		icon: "fas fa-images",
		visible: () => game.user?.isGM ?? false,
		onClick: (_event, target) => {
			const sceneId = target?.closest("[data-entry-id]")?.dataset?.entryId ?? target?.dataset?.sceneId;
			if (!sceneId) {
				log("No scene ID found on context menu target", true);
				return;
			}
			log(`Opening Scenery for scene: ${sceneId}`);
			new Scenery({ sceneId }).render({ force: true });
		}
	});
});
Hooks.on("renderSceneDirectory", (_app, html) => {
	const showHeaderButton = game.settings.get?.("scenery", SETTINGS.SHOW_HEADER_BUTTON) ?? true;
	if (!game.user?.isGM || !showHeaderButton) return;
	const headerActions = html.querySelector(".directory-header .header-actions");
	if (!headerActions || headerActions.querySelector(".scenery-button")) return;
	log("Adding scenery button to Scene Directory");
	const sceneryButton = document.createElement("button");
	sceneryButton.type = "button";
	sceneryButton.className = "scenery-button";
	sceneryButton.title = game.i18n.localize(I18N_KEYS.APP_NAME);
	sceneryButton.innerHTML = `<i class="${ICONS.APP}"></i>`;
	sceneryButton.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		const sceneId = canvas?.scene?.id ?? game.scenes?.contents[0]?.id;
		if (sceneId) {
			log(`Opening for scene: ${sceneId}`);
			new Scenery({ sceneId }).render({ force: true });
		} else ui.notifications?.warn("No scene available");
	});
	const createButton = headerActions.querySelector("[data-action=\"createEntry\"]");
	if (createButton) createButton.after(sceneryButton);
	else headerActions.prepend(sceneryButton);
});
Hooks.on("renderSettingsConfig", (_app, html) => {
	const htmlElement = html;
	if (!htmlElement) return;
	const lastSetting = htmlElement.querySelector(`[name="scenery.${SETTINGS.GLOBAL_NOTES}"]`);
	if (!lastSetting) return;
	const formGroup = lastSetting.closest(".form-group");
	if (!formGroup) return;
	const GLOBAL_DEFAULTS = {
		[SETTINGS.DEBUG_LOGGING]: false,
		[SETTINGS.SHOW_HEADER_BUTTON]: true,
		[SETTINGS.SHOW_VARIATIONS_LABEL]: true,
		[SETTINGS.GLOBAL_LIGHTS]: false,
		[SETTINGS.GLOBAL_SOUNDS]: false,
		[SETTINGS.GLOBAL_TILES]: false,
		[SETTINGS.GLOBAL_WALLS]: false,
		[SETTINGS.GLOBAL_DRAWINGS]: true,
		[SETTINGS.GLOBAL_REGIONS]: false,
		[SETTINGS.GLOBAL_NOTES]: true
	};
	const IDENTIFIER_DEFAULTS = {
		[SETTINGS.GM_MAP_IDENTIFIERS]: "gm, dm",
		[SETTINGS.PLAYER_MAP_IDENTIFIERS]: "player, pl"
	};
	const wrapper = document.createElement("div");
	wrapper.className = "form-group";
	wrapper.style.textAlign = "right";
	const button = document.createElement("button");
	button.type = "button";
	button.innerHTML = `<i class="${ICONS.RESET}"></i> ${game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_RESET) ?? "Reset to Defaults"}`;
	button.addEventListener("click", (event) => {
		event.preventDefault();
		for (const [key, defaultValue] of Object.entries(GLOBAL_DEFAULTS)) {
			const input = htmlElement.querySelector(`[name="scenery.${key}"]`);
			if (input) input.checked = defaultValue;
		}
		for (const [key, defaultValue] of Object.entries(IDENTIFIER_DEFAULTS)) {
			const input = htmlElement.querySelector(`[name="scenery.${key}"]`);
			if (input) input.value = defaultValue;
		}
		ui.notifications?.info(game.i18n?.localize(I18N_KEYS.SETTING_GLOBAL_RESET_DONE) ?? "Global element settings reset to defaults.");
	});
	wrapper.appendChild(button);
	formGroup.after(wrapper);
});
Hooks.once("init", () => {
	log("Init - Registering canvas hooks early");
	Hooks.on("canvasInit", Scenery._onCanvasInit);
	Hooks.on("canvasReady", (canvas) => {
		Scenery._onCanvasReady(canvas);
	});
});
Hooks.once("ready", () => {
	log("Ready - Registering remaining hooks");
	Hooks.on("updateScene", (scene, data) => {
		Scenery._onUpdateScene(scene, data);
	});
	Hooks.on("renderSceneDirectory", Scenery._onRenderSceneDirectory);
	log("All hooks registered successfully");
});
//#endregion

//# sourceMappingURL=scenery.js.map