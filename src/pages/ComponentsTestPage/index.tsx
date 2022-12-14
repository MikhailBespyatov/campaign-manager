import { AddButton } from 'components/common/buttons/AddButton';
import { Hr } from 'components/common/dividers/Hr';
import { Budget } from 'components/common/features/Budget';
import { Summary } from 'components/common/features/Summary';
import { Checkbox } from 'components/common/inputs/Checkbox';
import { InputAddTag } from 'components/common/inputs/InputAddTag';
import { LanguageSwitch } from 'components/common/inputs/LanguageSwitch';
import { LinkInput } from 'components/common/inputs/LinkInput';
import { NumberCounter } from 'components/common/inputs/NumberCounter';
import { Radio } from 'components/common/inputs/Radio';
import { RowRadio } from 'components/common/inputs/RowRadio';
import { Switch } from 'components/common/inputs/Switch';
import { TextInput } from 'components/common/inputs/TextInput';
import { CampaignInputsTable } from 'components/common/tables/CampaignInputsTable';
import { CampaignTable } from 'components/common/tables/CampaignTable';
import { AddableTag } from 'components/common/tags/AddableTag';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { CounterTag } from 'components/common/tags/CounterTag';
import { DropDownMenuTag } from 'components/common/tags/DropDownMenuTag';
import { TopBar } from 'components/grid/bars/TopBar';
import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import React, { useState } from 'react';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';

const disabled = true;

//const onCountChange = (value: number) => console.log(value);

//const onClick = (value: string) => console.log(value);

const Space = () => <div style={{ marginBottom: '10px' }}></div>;

export const Test = () => {
    const [checked, setChecked] = useState(false);

    const onChange = () => setChecked(!checked);

    return (
        <>
            <Header />
            <div
                style={{
                    width: '600px',
                    //minHeight: '600px',
                    margin: 'auto',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <ManualRoundedButton>normal</ManualRoundedButton>
                <Space />
                <ManualRoundedButton disabled={disabled}>disabled</ManualRoundedButton>
                <Space />
                <Checkbox value={'value'} onChange={onChange} />
                <Space />
                <Checkbox disabled={disabled} value={'value2'} onChange={onChange} />
                <Space />
                <TextInput error="" label="Some label" name="username" />
                <Space />
                <TextInput disabled={disabled} error="" label="Some label" name="username" />
                <Space />
                <TextInput error="error" label="Some label" name="username" />
                <Space />
                <LinkInput error="" label="Some label" name="username" />
                <Space />
                <LinkInput disabled={disabled} error="" label="Some label" name="username" />
                <Space />
                <LinkInput error="error" label="Some label" name="username" />
                <Space />
                <Radio checked={checked} onChange={onChange} />
                <Space />
                <Radio checked={checked} disabled={disabled} onChange={onChange} />
                <Space />
                {/* <VideoCard /> */}
                <Space />
                {/* <Pagination /> */}
                <Space />
                <CampaignTable />
                <Space />
                <Summary subtitle="Campaigns Running" title="20.000" />
                <Space />
                <ClosableTag closable>ADIDAS</ClosableTag>
                <Space />
                <ClosableTag>ADIDAS</ClosableTag>
                <Space />
                <DropDownMenuTag>7 DAYS</DropDownMenuTag>
                <Space />
                <RowRadio values={['hat1', 'hat2', 'hat3']} />
                <Space />
                <Space />
                <Switch />
                <Space />
                <NumberCounter />
                <Space />
                <CampaignInputsTable />
                <Space />
                <InputAddTag />
                <Space />
                <Budget summary="0.00" />
                <Space />
                <TopBar />
                <Space />
                <AddableTag>ADIDAS</AddableTag>
                <Space />
                <AddButton />
                <Space />
                <LanguageSwitch>WW</LanguageSwitch>
                <Space />
                <CounterTag hashtag>ADIDAS</CounterTag>
                <Space />
                <Hr />
                <Space />
                <Space />
                <Space />
                <Space />
            </div>
            <Footer />
        </>
    );
};
