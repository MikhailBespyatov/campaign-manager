import { LineBorder } from 'components/common/dividers/LineBorder';
import { Checkbox, CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { Select } from 'components/common/inputs/Select';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import { defaultFontSize, defaultFontWeight } from 'constants/defaults';
import { Noop } from 'constants/global';
import { grey4, primaryMargin } from 'constants/styles';
import { useField } from 'effector-forms/dist';
import {
    ageMock,
    biasBlockMargin,
    biasTitleMarginTop,
    biasValues,
    checkboxBlockMargin,
    configurationContentPadding,
    hashtagsMock,
    localeMock,
    overridesMock
} from 'pages/CampaignManager/Campaign/Create/Steps/Configuration/constants';
import React, { FC } from 'react';
import { forms } from 'stores/forms';
import {
    Bias,
    CreateCampaignStepsProps,
    DefaultValueBoolean,
    MaxSizes,
    OnChangeBoolean,
    OnChangeSelect,
    Title
} from 'types';
import { getFlexBasisPercent } from 'utils/usefulFunctions';
import {
    BiasTitle,
    CheckboxBlockWrapper,
    ConfigurationItemSubtitle,
    ConfigurationItemTitle,
    ConfigurationItemWrapper,
    Hashtag
} from './styles';

const BiasTitleLayout: FC = ({ children }) => (
    <RelativeWrapper width="auto">
        {children}
        <AbsoluteWrapper left="40px" top="-40px">
            <BiasTitle>Bias</BiasTitle>
        </AbsoluteWrapper>
    </RelativeWrapper>
);

interface BiasSelectProps extends Pick<Title, 'title'>, OnChangeSelect, Bias {
    isTitleBiasSelect?: boolean;
    itemFontSize?: string;
    itemFontWeight?: string;
}

const BiasSelect = ({
    title,
    onChangeSelect,
    bias,
    isTitleBiasSelect,
    itemFontSize,
    itemFontWeight
}: BiasSelectProps) => (
    <CheckboxBlockWrapper width="297px">
        <Section alignCenter justifyBetween height="100%">
            <Row>
                <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                    {title}
                </Span>
            </Row>
            {isTitleBiasSelect ? (
                <BiasTitleLayout>
                    <Select
                        defaultActive={bias}
                        itemFontSize={itemFontSize}
                        itemFontWeight={itemFontWeight}
                        values={biasValues}
                        width="110px"
                        onChange={onChangeSelect}
                    />
                </BiasTitleLayout>
            ) : (
                <Select
                    defaultActive={bias}
                    itemFontSize={itemFontSize}
                    itemFontWeight={itemFontWeight}
                    values={biasValues}
                    width="110px"
                    onChange={onChangeSelect}
                />
            )}
        </Section>
    </CheckboxBlockWrapper>
);

interface HashtagCheckboxProps
    extends DefaultValueBoolean,
        OnChangeBoolean,
        Pick<Title, 'subtitle'>,
        OnChangeSelect,
        Bias {
    hashtag: string;
    isTitleCheckbox?: boolean;
}

const HashtagCheckbox = ({
    hashtag,
    subtitle,
    bias,
    defaultValue,
    onChange = Noop,
    onChangeSelect,
    isTitleCheckbox
}: HashtagCheckboxProps) => {
    const flexBasis = getFlexBasisPercent(3);

    return (
        <CheckboxBlockWrapper checked={defaultValue} width="100%">
            <Section alignCenter justifyBetween height="100%">
                <FlexGrow flexBasis={flexBasis}>
                    <Hashtag onClick={() => onChange(!defaultValue)}>{hashtag}</Hashtag>
                </FlexGrow>

                {!!subtitle && (
                    <FlexGrow alignCenter flexBasis={flexBasis}>
                        <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
                            Viewers:
                            <Span fontSize="13px" fontWeight="400" lineHeight="16px">
                                {` ${subtitle}`}
                            </Span>
                        </Span>
                    </FlexGrow>
                )}
                <FlexGrow alignEnd flexBasis={flexBasis}>
                    {isTitleCheckbox ? (
                        <BiasTitleLayout>
                            <Select
                                defaultActive={bias}
                                disabled={!defaultValue}
                                itemFontSize="16px"
                                itemFontWeight="600"
                                values={biasValues}
                                width="110px"
                                onChange={onChangeSelect}
                            />
                        </BiasTitleLayout>
                    ) : (
                        <Select
                            defaultActive={bias}
                            disabled={!defaultValue}
                            itemFontSize="16px"
                            itemFontWeight="600"
                            values={biasValues}
                            width="110px"
                            onChange={onChangeSelect}
                        />
                    )}
                </FlexGrow>
            </Section>
        </CheckboxBlockWrapper>
    );
};

interface CheckboxBlockProps extends CheckboxProps, Title {}

const CheckboxBlock = ({ title, subtitle, defaultValue, ...rest }: CheckboxBlockProps) => (
    <CheckboxBlockWrapper checked={defaultValue} width="296px">
        <Section alignCenter height="100%">
            <MarginWrapper marginRight="20px">
                <Checkbox defaultValue={defaultValue} {...rest} />
            </MarginWrapper>
            {subtitle ? (
                <Column justifyBetween height="100%">
                    <Row>
                        <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                            {title}
                        </Span>
                    </Row>
                    <Row>
                        <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
                            Viewers:
                            <Span fontSize="13px" fontWeight="400" lineHeight="16px">
                                {` ${subtitle}`}
                            </Span>
                        </Span>
                    </Row>
                </Column>
            ) : (
                <Column justifyCenter height="100%">
                    <Row>
                        <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                            {title}
                        </Span>
                    </Row>
                </Column>
            )}
        </Section>
    </CheckboxBlockWrapper>
);

interface ConfigurationItemProps extends Title, Pick<MaxSizes, 'maxHeight'> {
    withoutLine?: boolean;
}

const ConfigurationItem: FC<ConfigurationItemProps> = ({ children, title, subtitle, withoutLine, maxHeight }) => (
    <>
        <ConfigurationItemWrapper maxHeight={maxHeight}>
            <Column marginBottom="16px" marginRight="20px" maxWidth="350px">
                <MarginWrapper marginBottom={primaryMargin}>
                    <ConfigurationItemTitle>{title}</ConfigurationItemTitle>
                </MarginWrapper>
                <ConfigurationItemSubtitle>{subtitle}</ConfigurationItemSubtitle>
            </Column>

            <FlexGrow alignContentEnd flexBasis="60%" /*flexShrink="0"*/ height={maxHeight}>
                {children}
            </FlexGrow>
        </ConfigurationItemWrapper>
        {!withoutLine && <LineBorder />}
    </>
);

export const Configuration: FC<CreateCampaignStepsProps> = () => {
    const ageData = ageMock;
    const localeData = localeMock;
    const hashtagsData = hashtagsMock;
    const overridesData = overridesMock;
    const { value: ageValue, onChange: onChangeAge } = useField(forms.createCampaignForm.fields.age);
    const { value: localeValue, onChange: onChangeLocale } = useField(forms.createCampaignForm.fields.locale);
    const { value: hashtagsValue, onChange: onChangeHashtags } = useField(forms.createCampaignForm.fields.hashtags);
    const { value: overridesValue, onChange: onChangeOverrides } = useField(forms.createCampaignForm.fields.overrides);

    const getAgeRange = ({ ageFrom, ageTo }: WOM.CampaignAgePromotion) =>
        ageFrom && ageTo ? `${ageFrom}-${ageTo}` : ageFrom && !ageTo ? `${ageFrom}+` : 'Unknown';

    const getHashtagWeight = (hashtag: string) => hashtagsValue.find(item => item.tag === hashtag)?.weight?.toString();

    //console.log('hashtagsValue', hashtagsValue);

    const onChangeAgeCheckbox = (range: WOM.CampaignAgePromotion) => (checked: boolean) =>
        checked
            ? onChangeAge([...ageValue, range])
            : onChangeAge(ageValue.filter(item => item.ageFrom !== range.ageFrom));

    const isAgeRangeChecked = (ageItem: WOM.CampaignAgePromotion) =>
        ageValue.some(item => item.ageFrom === ageItem.ageFrom);

    const onChangeLocaleCheckbox = (locale: string) => (checked: boolean) =>
        checked
            ? onChangeLocale([...localeValue, locale])
            : onChangeLocale(localeValue.filter(item => item !== locale));

    const onChangeHashtagCheckbox = (hashtag: string) => (checked: boolean) => {
        checked
            ? onChangeHashtags([...hashtagsValue, { tag: hashtag, weight: 2 }])
            : onChangeHashtags(hashtagsValue.filter(item => item.tag !== hashtag));
    };

    const onChangeHashtagSelect = (hashtag: string) => (active: string) =>
        onChangeHashtags([
            ...hashtagsValue.filter(item => item.tag !== hashtag),
            { tag: hashtag, weight: Number(active) }
        ]);

    const onChangeOverrideSelect = (form: string) => (active: string) =>
        onChangeOverrides({ ...overridesValue, [form]: active });

    return (
        <ContentWrapper marginBottom="20px" padding={configurationContentPadding} width="100%">
            <ConfigurationItem
                subtitle="Refine your target audience using the following criteria"
                title="Demographic Targeting"
            />
            <ConfigurationItem maxHeight="218px" subtitle="Target people based on their age range" title="Age">
                {ageData.map(ageItem => {
                    const { range /*, viewers*/ } = ageItem;
                    return (
                        <MarginWrapper
                            key={range.ageFrom}
                            marginBottom={checkboxBlockMargin}
                            marginRight={primaryMargin}
                            marginTop={checkboxBlockMargin}
                        >
                            <CheckboxBlock
                                defaultValue={isAgeRangeChecked(range)}
                                //subtitle={viewers}
                                title={getAgeRange(range)}
                                onChange={onChangeAgeCheckbox(range)}
                            />
                        </MarginWrapper>
                    );
                })}
            </ConfigurationItem>
            <ConfigurationItem maxHeight="290px" subtitle="Target people based on their location" title="Locale">
                {localeData.map(localeItem => {
                    const { locale /*, viewers */ } = localeItem;

                    return (
                        <MarginWrapper
                            key={locale}
                            marginBottom={checkboxBlockMargin}
                            marginRight={primaryMargin}
                            marginTop={checkboxBlockMargin}
                        >
                            <CheckboxBlock
                                defaultValue={localeValue.includes(locale)}
                                //subtitle={viewers}
                                title={locale}
                                onChange={onChangeLocaleCheckbox(locale)}
                            />
                        </MarginWrapper>
                    );
                })}
            </ConfigurationItem>
            <ConfigurationItem
                subtitle="Target people based on hashtags tagged to your selected videos"
                title="Hashtags"
            >
                <MarginWrapper marginTop={biasTitleMarginTop}>
                    {hashtagsData.map(({ hashtag /*, viewers*/ }, index) => (
                        <Row
                            key={hashtag}
                            marginBottom={biasBlockMargin}
                            marginRight={primaryMargin}
                            marginTop={biasBlockMargin}
                            width="600px"
                        >
                            <HashtagCheckbox
                                bias={getHashtagWeight(hashtag) || '2'}
                                defaultValue={hashtagsValue.some(item => item.tag === hashtag)}
                                hashtag={hashtag}
                                isTitleCheckbox={index === 0}
                                //subtitle={viewers}
                                onChange={onChangeHashtagCheckbox(hashtag)}
                                onChangeSelect={onChangeHashtagSelect(hashtag)}
                            />
                        </Row>
                    ))}
                </MarginWrapper>
            </ConfigurationItem>
            <ConfigurationItem
                withoutLine
                maxHeight="240px"
                subtitle="Set override functions to give videos featured in your campaign a second (non-consecutive) viewing and/or boost them to the top of the playlist"
                title="Overrides"
            >
                <MarginWrapper marginTop={biasTitleMarginTop}>
                    {overridesData.map(({ title, form }, index) => (
                        <MarginWrapper
                            key={title}
                            marginBottom={biasBlockMargin}
                            marginRight={primaryMargin}
                            marginTop={biasBlockMargin}
                        >
                            <BiasSelect
                                bias={overridesValue[form]}
                                isTitleBiasSelect={index === 0}
                                itemFontSize="16px"
                                itemFontWeight="600"
                                title={title}
                                onChangeSelect={onChangeOverrideSelect(form)}
                            />
                        </MarginWrapper>
                    ))}
                </MarginWrapper>

                <MarginWrapper marginTop="24px">
                    <CheckboxBlock
                        defaultValue={overridesValue.mustWatch}
                        title="Must watch"
                        onChange={(checked: boolean) => onChangeOverrides({ ...overridesValue, mustWatch: checked })}
                    />
                </MarginWrapper>
            </ConfigurationItem>
        </ContentWrapper>
    );
};
