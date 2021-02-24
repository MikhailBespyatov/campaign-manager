import { createEvent, createStore } from 'effector';
import { createCampaignSteps } from 'pages/CampaignManager/Campaign/Create/constants';

const countStepIndex = createCampaignSteps.length - 1;

const setStep = createEvent<number>();
const nextStep = createEvent();
const previousStep = createEvent();

const stepIndex = createStore(0)
    .on(setStep, (_, newStep) => newStep)
    .on(nextStep, index => (index === countStepIndex ? countStepIndex : index + 1))
    .on(previousStep, index => (index ? index - 1 : 0));
//
// const step = createStore(createCampaignSteps[0].title)
//     .on(setStep, (_, newStep) => createCampaignSteps[newStep].title)
//     .on([nextStep, previousStep], _ => createCampaignSteps[stepIndex.getState()].title);

// // Steps history
// const goToPrevStep = createEvent();
//
// const stepsHistory = createStore([step.getState()])
//     .on(goToPrevStep, steps => {
//         if (steps.length > 1) {
//             const prevStep = steps[steps.length - 2];
//             // setStep below doesn't affect
//             // "steps" variable in this function
//             setStep(prevStep);
//
//             return steps.slice(0, -1);
//         }
//
//         return steps;
//     })
//     .on(setStep, (steps, newStep) => [...steps, createCampaignSteps[newStep].component]);

export const createCampaignStores = { stepIndex };
export const createCampaignEvents = { setStep, nextStep, previousStep };
