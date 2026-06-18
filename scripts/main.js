const ColorPickerApp = {
    selectElement: null,
    countInputElement: null,
    stepInputElement: null,
    gridElement: null,
    overlayElement: null,
    defaultType: "soft-summer",
    defaultCount: 150,
    fallbackStepPercent: 2.5,

    types: {
        "soft-summer": {
            name: "Zgaszone Lato (Soft Summer)",
            colors: [
                "#4A6B82", "#5A7D9A", "#6B8FA8", "#7C9EB5", "#8DAEC3", "#9EBED0",
                "#5D6E7A", "#6E808D", "#8092A0", "#92A4B2", "#A4B6C5", "#B6C8D7",
                "#C28285", "#CE9497", "#DAA6A9", "#E6B8BB", "#F2CACD", "#FEDCDD",
                "#9B849B", "#A793A7", "#B3A2B3", "#BFB1BF", "#CBC0CB", "#D7CFD7",
                "#7A8B7B", "#899B8A", "#98AB99", "#A7BBA8", "#B6CCB7", "#C5DDC6",
                "#A3B899", "#B1C5A8", "#BFD2B7", "#CDE0C6", "#DBEDD5", "#E9FBE4",
                "#8B8589", "#9A9498", "#A9A3A7", "#B8B2B6", "#C7C1C5", "#D6D0D4",
                "#2B3E52", "#3B536B", "#4E6B84", "#6383A1", "#7B9DBB", "#B4C7D9",
                "#244641", "#335C55", "#4B7A72", "#669990", "#8FB3AC", "#C2D6D2",
                "#563444", "#6D4357", "#875870", "#A1708A", "#BE8CA7", "#D5AEBF"
            ]
        },
        "light-summer": {
            name: "Jasne Lato (Light Summer)",
            colors: [
                "#FFB7B2", "#FFC5C1", "#FFD3D1", "#FFE1E0", "#FFEFF0", "#FFC0CB",
                "#FFCCD4", "#FFD9DD", "#FFE5E7", "#FFF2F2", "#E8AEFF", "#ECBAFF",
                "#F0C7FF", "#F4D3FF", "#F8E0FF", "#FCEDFF", "#DDA0DD", "#E3AFE3",
                "#E9BFE9", "#EFCEEF", "#F5DEF5", "#FBEEFB", "#A1C9F4", "#B2D4F6",
                "#C3DFF9", "#D4E9FB", "#E5F4FD", "#87CEEB", "#99D6EE", "#ABDEF2",
                "#BDE7F5", "#CEEFF9", "#E0F7FC", "#B0E0E6", "#C0E8EC", "#D0F0F2",
                "#E0F8F8", "#AFEEEE", "#BFF2F2", "#CFF6F6", "#DFF9F9", "#EFFDFD",
                "#73E6B4", "#85EABF", "#97EECA", "#A9F2D5", "#BBF6E0", "#CDFAEB",
                "#ECE1C3", "#EFE7CE", "#F2EDD9", "#F5F3E4", "#F8F9EF", "#FBFAFA",
                "#FFFFFE", "#F6FFFF", "#F0FFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"
            ]
        },
        "cool-summer": {
            name: "Chłodne Lato (Cool Summer)",
            colors: [
                "#D23B68", "#DA527B", "#E26A8E", "#EA81A1", "#F299B4", "#FAB0C7",
                "#663399", "#7547A3", "#855CAD", "#9470B8", "#B399CE", "#191970",
                "#282882", "#383894", "#4747A6", "#5757B8", "#6666CA", "#4169E1",
                "#5479E5", "#678AE9", "#7A9AED", "#8DAAF1", "#A0BBF5", "#4682B4",
                "#5992C0", "#6CA3CC", "#7FB3D8", "#92C4E4", "#A5D4F0", "#98ABC5",
                "#A7B9D1", "#B6C7DD", "#C5D5E9", "#D4E3F5", "#E3F1FF", "#008080",
                "#1A9393", "#33A6A6", "#4DB9B9", "#66CCCC", "#80DFDF", "#20B2AA",
                "#3BC4BD", "#56D6D0", "#71E8E3", "#8CFAF6", "#A7FFFF", "#004B49",
                "#115B59", "#226B6A", "#337B7A", "#448B8B", "#559B9C", "#708090",
                "#7F8E9E", "#8E9CAC", "#9DAABA", "#ACC8C8", "#BCDCBC", "#1A1A1A"
            ]
        },
        "soft-autumn": {
            name: "Zgaszona Jesień (Soft Autumn)",
            colors: [
                "#D98880", "#E19A93", "#E9ACA6", "#F1BEB9", "#F9D0CC", "#FFE2DF",
                "#BC8F8F", "#C49C9C", "#CCA9A9", "#D4B6B6", "#DCC3C3", "#E4D0D0",
                "#A0522D", "#AB613F", "#B67151", "#C18063", "#CC9076", "#D79F88",
                "#8B4513", "#975528", "#A3663E", "#AF7653", "#BB8769", "#C7977E",
                "#B38B6D", "#BF9B80", "#CCAB93", "#D9BBA6", "#E6CCB9", "#F3DCCC",
                "#C69C54", "#CEAA69", "#D6B87E", "#DEC693", "#E6D4A8", "#EEDDBD",
                "#B5A642", "#C0B257", "#CBBE6D", "#D6CA83", "#E1D699", "#ECE2AF",
                "#808000", "#8F8F14", "#9E9E28", "#ADAD3C", "#BCBC50", "#CCCC64",
                "#606E47", "#6F7E56", "#7E8E65", "#8D9E74", "#9CAE83", "#ABBE92",
                "#8A865D", "#97936E", "#A4A080", "#B1AD91", "#BEBBA3", "#CBC8B5"
            ]
        },
        "warm-autumn": {
            name: "Ciepła Jesień (Warm Autumn)",
            colors: [
                "#8E2323", "#9B3434", "#A84545", "#B55656", "#C26767", "#CF7878",
                "#B22222", "#BC3535", "#C64949", "#D05D5D", "#DA7171", "#E48585",
                "#FF033F", "#FF4500", "#FF571A", "#FF6A33", "#FF7C4D", "#FF8F66",
                "#FFA180", "#C35237", "#CC6349", "#D6745C", "#E0866F", "#EA9782",
                "#F4A895", "#ED872D", "#F09543", "#F3A35A", "#F6B171", "#F9BF88",
                "#FCCD9F", "#D2691E", "#D87935", "#DE894D", "#E49964", "#EAA97B",
                "#F0B993", "#FF8C00", "#FF991A", "#FFB34D", "#FFC066", "#FFCD80",
                "#E1AD01", "#E6B71F", "#EBC13D", "#F0CB5B", "#F5D579", "#FADF97",
                "#7A4B26", "#875A36", "#946A47", "#AE8968", "#BB9979", "#ADDFAD",
                "#B8E4B8", "#C3EAC3", "#CEEFCE", "#D9F4D9", "#E4F9E4", "#1A1A1A"
            ]
        },
        "deep-autumn": {
            name: "Ciemna Jesień (Deep Autumn)",
            colors: [
                "#800000", "#8D1111", "#9A2242", "#A73333", "#B44444", "#C15575",
                "#913831", "#9E473F", "#AB564E", "#B8655D", "#C5746C", "#D2837B",
                "#4A2E2B", "#573B38", "#644845", "#715552", "#7E625F", "#8B6F6C",
                "#CC5500", "#D4661A", "#DC7733", "#E4884D", "#EC9966", "#F4AA80",
                "#A0522D", "#AD5F3A", "#BA6C47", "#C77954", "#D48661", "#E1936E",
                "#CC7722", "#D48537", "#DC934D", "#E4A162", "#ECAF78", "#F4BD8D",
                "#4E2A4F", "#5B375C", "#684469", "#755176", "#825E83", "#8F6B90",
                "#556B2F", "#62783C", "#6F8549", "#7C9256", "#899F63", "#96AC70",
                "#1E4D2B", "#2B5A38", "#386745", "#457452", "#52815F", "#5F8E6C",
                "#2E8B57", "#3B9864", "#48A571", "#55B27E", "#62BF8B", "#6FCC98"
            ]
        },
        "light-spring": {
            name: "Jasna Wiosna (Light Spring)",
            colors: [
                "#F08080", "#F38F8F", "#F69E9E", "#F9ADAD", "#FCBCBC", "#FFCBCB",
                "#FFA07A", "#FFAE8D", "#FFBCA1", "#FFCAB4", "#FFD8C8", "#FFE6DC",
                "#FFB077", "#FFBD8A", "#FFCA9E", "#FFD7B1", "#FFE4C5", "#FFF1D8",
                "#FFD700", "#FFE033", "#FFE966", "#FFF299", "#FFFBCC", "#FFF700",
                "#FFFF33", "#FFFF66", "#FFFF99", "#FFFFCC", "#FFFDD0", "#FFFEE0",
                "#FFFFF0", "#00FF7F", "#33FF99", "#66FFB2", "#99FFCC", "#CCFFE5",
                "#98FF98", "#AAFFAA", "#BBFFBB", "#CCFFCC", "#DDFFDD", "#EEFFEE",
                "#40E0D0", "#5CE5D8", "#79EAE1", "#95EFE9", "#B2F4F2", "#CFFFFB",
                "#779ECB", "#89AED9", "#9BBEEC", "#ADCEFA", "#BFDEFF", "#D1EEFF",
                "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"
            ]
        },
        "warm-spring": {
            name: "Ciepła Wiosna (Warm Spring)",
            colors: [
                "#FF4500", "#FF571A", "#FF6A33", "#FF7C4D", "#FF8F66", "#FFA180",
                "#FF8C00", "#FF991A", "#FFA533", "#FFB24D", "#FFC066", "#FFCD80",
                "#F28500", "#F5931A", "#F8A133", "#FBAF4D", "#FDBD66", "#FFCC80",
                "#E97451", "#ED8464", "#F19477", "#F5A48A", "#F9B49D", "#FDC4B0",
                "#FFD700", "#FFE01A", "#FFE933", "#FFF24D", "#FFFB66", "#FFFF80",
                "#FFFF31", "#FFFF4D", "#FFFF6A", "#FFFF86", "#FFFF1A", "#FFFFBD",
                "#7FFF00", "#91FF33", "#A4FF66", "#B6FF99", "#C9FFCC", "#32CD32",
                "#4CE34C", "#66F966", "#80FF80", "#99FF99", "#B3FFB3", "#20B2AA",
                "#3BC4BD", "#56D6D0", "#71E8E3", "#8CFAF6", "#A7FFFF", "#996515",
                "#A67327", "#C0904C", "#CD9E5E", "#DAAC71", "#DBFFFF", "#1A1A1A"
            ]
        },
        "clear-spring": {
            name: "Czysta Wiosna (Clear Spring)",
            colors: [
                "#FF2400", "#FF3D1A", "#FF5733", "#FF704D", "#FF8A66", "#FFA380",
                "#FF1493", "#FF3FAD", "#FF6BC8", "#FF96E2", "#FFC2FD", "#FF69B4",
                "#FF7C4D", "#FF8EC7", "#FFA1D0", "#FFB3DA", "#FFC6E3", "#FF00FF",
                "#FF33FF", "#1E90FF", "#3FA1FF", "#60B2FF", "#81C3FF", "#A2D4FF",
                "#C3E5FF", "#00F5FF", "#33F7FF", "#66F9FF", "#99FBFF", "#CCFDFF",
                "#00FFFF", "#33FFFF", "#66FFFF", "#99FFFF", "#CCFFFF", "#00FA9A",
                "#33FBAE", "#66FCC2", "#99FDD6", "#CCFEEA", "#00FF00", "#33FF33",
                "#66FF66", "#99FF99", "#CCFFCC", "#FFEA00", "#FFED33", "#FFF066",
                "#FFF399", "#FFF6CC", "#66FF66", "#99FF99", "#CCFFCC", "#FFFFFF",
                "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"
            ]
        },
        "clear-winter": {
            name: "Czysta Zima (Clear Winter)",
            colors: [
                "#E60045", "#ED335E", "#F46678", "#FB9991", "#FFCCAA", "#FFCCBF",
                "#FF00FF", "#FF33FF", "#8A2BE2", "#9640E5", "#A255E9", "#AE6AED",
                "#BA7FF0", "#C694F4", "#191970", "#282882", "#383894", "#4747A6",
                "#5757B8", "#6666CA", "#0047AB", "#1A5AA3", "#336D9B", "#4D8093",
                "#66938B", "#80A683", "#4169E1", "#5479E5", "#678AE9", "#7A9AED",
                "#8DAAF1", "#A0BBF5", "#0000FF", "#3333FF", "#6666FF", "#9999FF",
                "#CCCCFF", "#00C69C", "#1AD0A7", "#33DAB1", "#4DE4BC", "#66EEC6",
                "#80F8D1", "#66FF66", "#99FF99", "#CCFFCC", "#FFFFFF", "#FFFFFF",
                "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB", "#E6E6E6", "#FFFFFF",
                "#000000", "#111111", "#222222", "#333333", "#444444", "#555555"
            ]
        },
        "cool-winter": {
            name: "Chłodna Zima (Cool Winter)",
            colors: [
                "#800080", "#8D118D", "#9A229A", "#A733A7", "#B444B4", "#C155C1",
                "#4B0082", "#5A118D", "#692299", "#7933A5", "#8844B1", "#9755BC",
                "#FFDDF4", "#FFE3F7", "#FFE9FA", "#FFEFFD", "#FFF5FF", "#000080",
                "#17178D", "#2E2E9A", "#4646A7", "#5D5DB4", "#7474C1", "#0F52BA",
                "#2461C1", "#3A71C9", "#5080D0", "#6590D8", "#7BA0DF", "#4169E1",
                "#5479E5", "#678AE9", "#7A9AED", "#8DAAF1", "#A0BBF5", "#4682B4",
                "#5992C0", "#6CA3CC", "#7FB3D8", "#92C4E4", "#A5D4F0", "#ACE5EE",
                "#BCECEF", "#CCF2F1", "#DDF9F3", "#EEFFFF", "#2F4F4F", "#3C5D5D",
                "#4A6C6C", "#577A7A", "#658989", "#729797", "#C0C0C0", "#CCCCCC",
                "#D6D6D6", "#E0E0E0", "#EAEAEA", "#F4F4F4", "#FFFFFF", "#FFFFFF"
            ]
        },
        "deep-winter": {
            name: "Ciemna Zima (Deep Winter)",
            colors: [
                "#560319", "#631327", "#702435", "#7D3443", "#8A4551", "#97555F",
                "#800020", "#8D1131", "#9A2242", "#A73353", "#B44464", "#C15575",
                "#4E094F", "#5B195D", "#682A6A", "#753A78", "#824B86", "#8F5B93",
                "#4B0082", "#5A118D", "#692299", "#7933A5", "#8844B1", "#9755BC",
                "#000080", "#17178D", "#2E2E9A", "#4646A7", "#5D5DB4", "#7474C1",
                "#191970", "#282882", "#383894", "#4747A6", "#5757B8", "#6666CA",
                "#01796F", "#14867C", "#279489", "#3AA196", "#4DAFA3", "#60BCB0",
                "#2E8B57", "#3B9864", "#48A571", "#55B27E", "#62BF8B", "#6FCC98",
                "#36454F", "#43525C", "#50606A", "#5E6D77", "#6B7A84", "#788892",
                "#000000", "#111111", "#222222", "#333333", "#444444", "#555555"
            ]
        }
    },

    init: function () {
        Object.freeze(this.types);

        this.selectElement = document.getElementById("color-type-select");
        this.countInputElement = document.getElementById("color-count-input");
        this.stepInputElement = document.getElementById("color-step-input");
        this.gridElement = document.getElementById("colors-grid");
        this.overlayElement = document.getElementById("fullscreen-overlay");

        if (!this.selectElement || !this.countInputElement || !this.stepInputElement || !this.gridElement || !this.overlayElement) return;

        const urlParams = new URLSearchParams(window.location.search);
        const typeFromUrl = urlParams.get("type");
        const countFromUrl = urlParams.get("count");
        const stepFromUrl = urlParams.get("step");

        let initialStep = this.fallbackStepPercent;

        if (typeFromUrl && this.types[typeFromUrl]) {
            this.defaultType = typeFromUrl;
        }

        if (countFromUrl && !isNaN(parseInt(countFromUrl, 10))) {
            this.defaultCount = parseInt(countFromUrl, 10);
        }

        if (stepFromUrl && !isNaN(parseFloat(stepFromUrl))) {
            const parsedStep = parseFloat(stepFromUrl);
            initialStep = parsedStep;
            this.stepInputElement.value = parsedStep;
        }

        this.countInputElement.value = this.defaultCount;

        this.initDropdown();
        this.registerEvents();
        this.renderColors(this.defaultType, this.defaultCount, initialStep);
    },

    initDropdown: function () {
        Object.keys(this.types).forEach(key => {
            const option = document.createElement("option");

            option.value = key;
            option.textContent = this.types[key].name;

            if (key === this.defaultType) {
                option.selected = true;
            }

            this.selectElement.appendChild(option);
        });
    },

    registerEvents: function () {
        this.selectElement.addEventListener("change", (e) => {
            const selectedType = e.target.value;
            const currentCount = parseInt(this.countInputElement.value, 10) || this.defaultCount;
            const currentStep = parseFloat(this.stepInputElement.value) || this.fallbackStepPercent;

            this.updateUrlParams(selectedType, currentCount, this.stepInputElement.value);
            this.renderColors(selectedType, currentCount, currentStep);
        });

        this.countInputElement.addEventListener("input", (e) => {
            let val = parseInt(e.target.value, 10);

            const currentType = this.selectElement.value;
            const currentStep = parseFloat(this.stepInputElement.value) || this.fallbackStepPercent;

            this.updateUrlParams(currentType, val, this.stepInputElement.value);
            this.renderColors(currentType, val, currentStep);
        });

        this.stepInputElement.addEventListener("input", (e) => {
            let val = parseFloat(e.target.value);
            let activeStep = val;

            if (isNaN(val)) {
                activeStep = this.fallbackStepPercent;
            } else {
                activeStep = val;
            }

            const currentType = this.selectElement.value;
            const currentCount = parseInt(this.countInputElement.value, 10) || this.defaultCount;

            this.updateUrlParams(currentType, currentCount, e.target.value);
            this.renderColors(currentType, currentCount, activeStep);
        });

        this.overlayElement.addEventListener("click", () => {
            this.overlayElement.classList.remove("active");
            document.body.classList.remove('no-scroll');
        });
    },

    updateUrlParams: function (typeKey, countValue, stepString) {
        let newUrl = window.location.pathname + "?type=" + typeKey + "&count=" + countValue;

        if (stepString && !isNaN(parseFloat(stepString))) {
            newUrl += "&step=" + parseFloat(stepString);
        }

        window.history.replaceState({ path: newUrl }, "", newUrl);
    },

    hexToRgb: function (hex) {
        const bigint = parseInt(hex.replace("#", ""), 16);

        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    },

    rgbToHex: function (r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },

    hexToHue: function (hex) {
        const rgb = this.hexToRgb(hex);
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;

        let h = 0;

        if (delta !== 0) {
            if (max === r) {
                h = ((g - b) / delta) % 6;
            } else if (max === g) {
                h = (b - r) / delta + 2;
            } else {
                h = (r - g) / delta + 4;
            }
            h = Math.round(h * 60);
            if (h < 0) h += 360;
        }

        return h;
    },

    expandToTargetCount: function (baseColors, targetCount, stepPercent) {
        const result = [];
        const uniqueColors = new Set();

        baseColors.forEach(hex => {
            const upper = hex.toUpperCase();
            if (!uniqueColors.has(upper)) {
                uniqueColors.add(upper);
                result.push(upper);
            }
        });

        let index = 0;
        let iteration = 1;
        const stepFactor = stepPercent / 100;

        while (result.length < targetCount && result.length < 400) {
            const baseHex = baseColors[index % baseColors.length];
            const rgb = this.hexToRgb(baseHex);

            const modifier = 1 + (iteration * stepFactor * (iteration % 2 === 0 ? 1 : -1));

            const r = Math.min(255, Math.max(0, Math.round(rgb.r * modifier)));
            const g = Math.min(255, Math.max(0, Math.round(rgb.g * modifier)));
            const b = Math.min(255, Math.max(0, Math.round(rgb.b * modifier)));

            const newHex = this.rgbToHex(r, g, b).toUpperCase();

            if (!uniqueColors.has(newHex)) {
                uniqueColors.add(newHex);
                result.push(newHex);
            }

            index++;

            if (index % baseColors.length === 0) {
                iteration++;
            }
        }

        return result.slice(0, targetCount);
    },

    renderColors: function (typeKey, countValue, stepValue) {
        this.gridElement.innerHTML = "";

        const typeData = this.types[typeKey];

        if (!typeData || !typeData.colors) return;

        const fullPalette = this.expandToTargetCount(typeData.colors, countValue, stepValue);

        fullPalette.sort((a, b) => {
            return this.hexToHue(a) - this.hexToHue(b);
        });

        fullPalette.forEach(hexValue => {
            const tile = document.createElement("div");

            tile.className = "color-tile";
            tile.style.backgroundColor = hexValue;

            const infoContainer = document.createElement("div");

            infoContainer.className = "color-info";
            infoContainer.innerHTML = `
                <span class="color-hex">${hexValue}</span>
            `;

            tile.appendChild(infoContainer);

            tile.addEventListener("click", () => {
                this.overlayElement.style.backgroundColor = hexValue;
                this.overlayElement.classList.add("active");
                document.body.classList.add('no-scroll');
            });

            this.gridElement.appendChild(tile);
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    ColorPickerApp.init();
});