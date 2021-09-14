import { combine, createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const addCreatorId = createEvent<string>();
const removeCreatorsId = createEvent<string>();
const removeCreator = createEvent<string>();
const addCreator = createEvent<WOM.CampaignCreator>();

const creatorsIds = createStore<string[]>([])
    .on(addCreatorId, (state, creatorId) => [...state, creatorId])
    .on(removeCreatorsId, (state, creatorId) => {
        const newState = [...state];
        const arrIndex = state.indexOf(creatorId);
        newState.splice(arrIndex, 1);

        return newState;
    });

const getCreators = createEffect({
    handler: async (value: WOM.QueryCampaignCreatorsRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.campaigns.getCreators(value);
            loadingEffects.updateInitialLoading();
            const creators = data.creators;
            return creators || [];
        } catch {
            loadingEffects.updateInitialLoading();
            return [];
        }
    }
});

const creators = createStore<WOM.CampaignCreator[]>([])
    .on(getCreators.doneData, (_, newState) => newState)
    .on(removeCreator, (state, creatorName) => state.filter(it => it.creatorName !== creatorName))
    .on(addCreator, (state, creator) => [...state, creator]);

const creatorsData = createStore<WOM.CampaignCreator[]>([]).on(getCreators.doneData, (_, newState) => newState);

const combinedCreatorsStories = combine(creatorsIds, creators, creatorsData);
const creatorsEvents = { addCreatorId, removeCreatorsId, removeCreator, addCreator };
const creatorsEffects = { getCreators };

export { combinedCreatorsStories, creatorsEvents, creatorsEffects };
