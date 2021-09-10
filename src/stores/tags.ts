import { createEvent, createStore } from 'effector';

const addTags = createEvent<string[]>();
const removeTags = createEvent<string[]>();

const tags = createStore<string[]>([])
    .on(addTags, (state, tags) => [...state, ...tags])
    .on(removeTags, (state, tags) => {
        const newState = [...state];
        tags.forEach(it => {
            const arrIndex = state.indexOf(it);
            newState.splice(arrIndex, 1);
        });
        return newState;
    });

const tagsStories = { tags };
const tagsEvents = { addTags, removeTags };

export { tagsStories, tagsEvents };
