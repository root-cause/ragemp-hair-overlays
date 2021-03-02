// Constants
const freemodeMaleModel = mp.joaat("mp_m_freemode_01") >> 0;
const freemodeFemaleModel = mp.joaat("mp_f_freemode_01") >> 0;
const hairComponentIndex = 2;

// mp.Player extension
mp.Player.prototype.applyHairOverlay = function() {
    const playerModel = this.model >> 0;
    if (playerModel === freemodeMaleModel || playerModel === freemodeFemaleModel) {
        const { drawable } = this.getClothes(hairComponentIndex);
        this.callToStreamed(true, "hairOverlay::update", [ this, drawable ]);
    }
};