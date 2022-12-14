import { createRule, yupCompanyName } from 'constants/yupFields';
import { createEvent, forward, sample } from 'effector';
import { createForm } from 'effector-forms';
import { channelsEffects } from 'stores/channels';

export const channelForm = createForm({
    fields: {
        name: {
            init: '',
            rules: [
                createRule<string>({
                    name: 'channelName',
                    schema: yupCompanyName
                })
            ]
        },
        id: {
            init: ''
        },
        isPrivate: {
            init: true
        }
    },
    validateOn: ['change', 'blur', 'submit']
});

//using form for different events
const editSubmit = createEvent();
const addSubmit = createEvent();

//form will submit by triggered events
forward({ from: [addSubmit, editSubmit], to: channelForm.submit });

//using endpoint for submit
sample({
    source: channelForm.$values,
    clock: addSubmit,
    target: channelsEffects.createChannel,
    fn: ({ name, isPrivate }, _) => ({ name, isPrivate })
});

//using endpoint for submit
sample({
    source: channelForm.$values,
    clock: editSubmit,
    target: channelsEffects.updateChannel,
    fn: ({ name, isPrivate, id }, _) => ({ name, id, isPrivate })
});

//reset form
forward({
    from: [channelsEffects.createChannel.doneData, channelsEffects.updateChannel.doneData],
    to: channelForm.resetValues
});

// Set form when get data from endpoint
// forward({
//     from: channelsEffects.getItemById.doneData,
//     to: channelForm.setForm
// });

//* this interface is needed to eliminate type discrepancy
//* as model return 'string | undefined | null' and we need  'string | undefined'
interface StateProps {
    id?: string;
    name?: string;
    isPrivate?: boolean;
}

channelsEffects.getItemById.doneData.watch(state => {
    const { id, name, isPrivate } = state as StateProps;

    channelForm.setForm({ id, name, isPrivate });
});

export const channelFormEvents = { editSubmit, addSubmit };
