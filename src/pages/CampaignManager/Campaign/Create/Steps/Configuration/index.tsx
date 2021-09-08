import { ClearInputButton } from 'components/common/buttons/ClearInputButton';
import { LineBorder } from 'components/common/dividers/LineBorder';
import { Checkbox, CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { SearchSelect } from 'components/common/inputs/SearchSelect';
import { Select } from 'components/common/inputs/Select';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import {
    defaultFontSize,
    defaultFontWeight,
    largeFontSize,
    largeLineHeight,
    smallFontSize,
    smallLineHeight
} from 'constants/defaults';
import { grey4, primaryMargin } from 'constants/styles';
import { useField } from 'effector-forms/dist';
import { useStore } from 'effector-react';
import {
    ageMock,
    biasBlockMargin,
    biasValues,
    boostMock,
    checkboxBlockMargin,
    configurationContentPadding,
    overrideMock,
    VISIBLE_COUNTRIES
} from 'pages/CampaignManager/Campaign/Create/Steps/Configuration/constants';
import React, { FC, useEffect, useState } from 'react';
import { forms } from 'stores/forms';
import { countriesEffects, countriesStores } from 'stores/location';
import { Bias, CreateCampaignStepsProps, MaxSizes, OnChangeSelect, Sizes, Title } from 'types';
import {
    AgeBlockWrapper,
    AllCountryModalWrapper,
    BiasTitle,
    CheckboxBlockWrapper,
    ColumnWrapper,
    ConfigurationItemSubtitle,
    ConfigurationItemTitle,
    ConfigurationItemWrapper,
    CountryBlock,
    CountryBlockWrapper,
    CountryItemWrapper,
    CountryListWrapper,
    GrayWrapper,
    HiddenScrollBar,
    LargeClearButton,
    RowWrapper,
    ShowAllButton
} from './styles';

const BiasTitleLayout: FC = ({ children }) => (
    <RelativeWrapper width="auto">
        {children}
        <AbsoluteWrapper left="40px" top="-40px">
            <BiasTitle>Bias</BiasTitle>
        </AbsoluteWrapper>
    </RelativeWrapper>
);

interface BiasSelectProps extends Pick<Title, 'title'>, OnChangeSelect, Bias, Pick<MaxSizes, 'maxWidth'> {
    isTitleBiasSelect?: boolean;
    itemFontSize?: string;
    itemFontWeight?: string;
}

const BiasSelect = ({
    title,
    onChangeSelect,
    bias,
    maxWidth,
    isTitleBiasSelect,
    itemFontSize,
    itemFontWeight
}: BiasSelectProps) => (
    <CheckboxBlockWrapper maxWidth={maxWidth}>
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

// interface HashtagCheckboxProps
//     extends DefaultValueBoolean,
//         OnChangeBoolean,
//         Pick<Title, 'subtitle'>,
//         OnChangeSelect,
//         Bias {
//     hashtag: string;
//     isTitleCheckbox?: boolean;
// }

// const HashtagCheckbox = ({
//     hashtag,
//     subtitle,
//     bias,
//     defaultValue,
//     onChange = Noop,
//     onChangeSelect,
//     isTitleCheckbox
// }: HashtagCheckboxProps) => {
//     const flexBasis = getFlexBasisPercent(3);

//     return (
//         <CheckboxBlockWrapper checked={defaultValue} width="100%">
//             <Section alignCenter justifyBetween height="100%">
//                 <FlexGrow flexBasis={flexBasis}>
//                     <Hashtag onClick={() => onChange(!defaultValue)}>{hashtag}</Hashtag>
//                 </FlexGrow>

//                 {!!subtitle && (
//                     <FlexGrow alignCenter flexBasis={flexBasis}>
//                         <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
//                             Viewers:
//                             <Span fontSize="13px" fontWeight="400" lineHeight="16px">
//                                 {` ${subtitle}`}
//                             </Span>
//                         </Span>
//                     </FlexGrow>
//                 )}
//                 <FlexGrow alignEnd flexBasis={flexBasis}>
//                     {isTitleCheckbox ? (
//                         <BiasTitleLayout>
//                             <Select
//                                 defaultActive={bias}
//                                 disabled={!defaultValue}
//                                 itemFontSize="16px"
//                                 itemFontWeight="600"
//                                 values={biasValues}
//                                 width="110px"
//                                 onChange={onChangeSelect}
//                             />
//                         </BiasTitleLayout>
//                     ) : (
//                         <Select
//                             defaultActive={bias}
//                             disabled={!defaultValue}
//                             itemFontSize="16px"
//                             itemFontWeight="600"
//                             values={biasValues}
//                             width="110px"
//                             onChange={onChangeSelect}
//                         />
//                     )}
//                 </FlexGrow>
//             </Section>
//         </CheckboxBlockWrapper>
//     );
// };

interface CheckboxBlockProps extends CheckboxProps, Title {}

const CheckboxBlock = ({ title, subtitle, defaultValue, ...rest }: CheckboxBlockProps) => (
    <CheckboxBlockWrapper checked={defaultValue}>
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

interface CountrySelectBlockProps {
    title: string;
    onRemoveCountryBlock: (value: string) => void;
}

const CountrySelectBlock = ({ title, onRemoveCountryBlock }: CountrySelectBlockProps) => (
    <CountryBlock>
        <Section alignCenter justifyBetween height="100%">
            <Span fontSize={smallFontSize} fontWeight={defaultFontWeight} lineHeight={smallLineHeight}>
                {title}
            </Span>
            <ClearInputButton
                onClick={() => {
                    onRemoveCountryBlock(title);
                }}
            />
        </Section>
    </CountryBlock>
);

interface ConfigurationItemProps extends Title, Pick<Sizes, 'height'> {
    withoutLine?: boolean;
}

const ConfigurationItem: FC<ConfigurationItemProps> = ({ children, title, subtitle, withoutLine, height }) => (
    <>
        <ConfigurationItemWrapper>
            <RowWrapper>
                <Column marginTop="10px" width="350px">
                    <ConfigurationItemTitle>{title}</ConfigurationItemTitle>

                    <MarginWrapper marginRight="20px" marginTop={primaryMargin}>
                        <ConfigurationItemSubtitle>{subtitle}</ConfigurationItemSubtitle>
                    </MarginWrapper>
                </Column>
            </RowWrapper>

            <ColumnWrapper height={height}>{children}</ColumnWrapper>
        </ConfigurationItemWrapper>

        {!withoutLine && (
            <Section>
                <LineBorder />
            </Section>
        )}
    </>
);

export const Configuration: FC<CreateCampaignStepsProps> = () => {
    const [displayCountryPopup, setDisplayCountryPopup] = useState(true);
    const countriesData = useStore(countriesStores.locations);
    const countries = countriesData.countries
        ? countriesData.countries.map(it => it.countryName).filter((item): item is string => typeof item === 'string')
        : [''];
    const ageData = ageMock;
    //const hashtagsData = hashtagsMock;
    const overridesData = overrideMock;
    const boostData = boostMock;
    const { value: ageValue, onChange: onChangeAge } = useField(forms.createCampaignForm.fields.age);
    const { value: countriesValue, onChange: onChangeCountry } = useField(forms.createCampaignForm.fields.countries);
    //const { value: hashtagsValue, onChange: onChangeHashtags } = useField(forms.createCampaignForm.fields.hashtags);
    const { value: overrideValue, onChange: onChangeOverrides } = useField(forms.createCampaignForm.fields.override);
    const { value: boostValues /*, onChange: onChangeBoostValues*/ } = useField(
        forms.createCampaignForm.fields.boostValues
    );

    useEffect(() => {
        countriesEffects.getLocations();
    }, []);

    const getAgeRange = ({ ageFrom, ageTo }: WOM.CampaignAgePromotion) =>
        ageFrom && ageTo ? `${ageFrom}-${ageTo}` : ageFrom && !ageTo ? `${ageFrom}+` : 'Unknown';

    //const getHashtagWeight = (hashtag: string) => hashtagsValue.find(item => item.tag === hashtag)?.weight?.toString();

    //console.log('hashtagsValue', hashtagsValue);

    const onChangeAgeCheckbox = (range: WOM.CampaignAgePromotion) => (checked: boolean) =>
        checked
            ? onChangeAge([...ageValue, range])
            : onChangeAge(ageValue.filter(item => item.ageFrom !== range.ageFrom));

    const isAgeRangeChecked = (ageItem: WOM.CampaignAgePromotion) =>
        ageValue.some(item => item.ageFrom === ageItem.ageFrom);

    const onChangeCountrySelect = (country: string) => {
        if (!countriesValue.includes(country)) {
            onChangeCountry([...countriesValue, country]);
        }
    };

    const onRemoveCountryBlock = (country: string) => {
        const newCountries = countriesValue.filter(it => it !== country);

        onChangeCountry(newCountries);
    };

    // const onChangeCountryCheckbox = (country: string) => (checked: boolean) =>
    //     checked
    //         ? onChangeCountry([...countriesValue, country])
    //         : onChangeCountry(countriesValue.filter(item => item !== country));

    // const onChangeHashtagCheckbox = (hashtag: string) => (checked: boolean) => {
    //     checked
    //         ? onChangeHashtags([...hashtagsValue, { tag: hashtag, weight: 2 }])
    //         : onChangeHashtags(hashtagsValue.filter(item => item.tag !== hashtag));
    // };

    // const onChangeHashtagSelect = (hashtag: string) => (active: string) =>
    //     onChangeHashtags([
    //         ...hashtagsValue.filter(item => item.tag !== hashtag),
    //         { tag: hashtag, weight: Number(active) }
    //     ]);

    const onChangeOverrideSelect = (form: string) => (active: string) =>
        onChangeOverrides({ ...overrideValue, [form]: active });

    return (
        <ContentWrapper marginBottom="20px" padding={configurationContentPadding} width="100%">
            <Column alignCenter width="100%">
                <ConfigurationItem
                    subtitle="Set override functions to give videos featured in your campaign a second (non-consecutive) viewing and/or boost them to the top of the playlist"
                    title="Overrides"
                >
                    <Column>
                        <Section>
                            {overridesData.map(({ title, form }) => (
                                <Section key={title} marginBottom={biasBlockMargin} marginTop={biasBlockMargin}>
                                    <BiasSelect
                                        bias={overrideValue[form]}
                                        itemFontSize="16px"
                                        itemFontWeight="600"
                                        title={title}
                                        onChangeSelect={onChangeOverrideSelect(form)}
                                    />
                                </Section>
                            ))}
                        </Section>
                    </Column>
                </ConfigurationItem>
                {/* <ConfigurationItem maxHeight="290px" subtitle="Target people based on their location" title="Country">
                {countriesData.map(item => {
                    const { country , viewers  } = item;

                    return (
                        <MarginWrapper
                            key={country}
                            marginBottom={checkboxBlockMargin}
                            marginRight={primaryMargin}
                            marginTop={checkboxBlockMargin}
                        >
                            <CheckboxBlock
                                defaultValue={countriesValue.includes(country)}
                                subtitle={viewers}
                                title={country}
                                onChange={onChangeCountryCheckbox(country)}
                            />
                        </MarginWrapper>
                    );
                })}
            </ConfigurationItem> */}

                <ConfigurationItem subtitle="Target people based on their location" title="Country">
                    <Column minHeight="126px">
                        <MarginWrapper marginBottom={biasBlockMargin} marginTop="46px">
                            <SearchSelect
                                defaultValue=""
                                itemsList={countries}
                                placeholder="Add countries"
                                onItemSelect={onChangeCountrySelect}
                            />
                        </MarginWrapper>
                        <CountryBlockWrapper>
                            {countriesValue.length !== 0 &&
                                countriesValue.slice(0, VISIBLE_COUNTRIES).map(it => (
                                    <MarginWrapper
                                        key={it}
                                        marginBottom={checkboxBlockMargin}
                                        marginRight={primaryMargin}
                                        marginTop={checkboxBlockMargin}
                                    >
                                        <CountrySelectBlock title={it} onRemoveCountryBlock={onRemoveCountryBlock} />
                                    </MarginWrapper>
                                ))}
                        </CountryBlockWrapper>
                        {countriesValue.length > VISIBLE_COUNTRIES && (
                            <ShowAllButton
                                onClick={() => {
                                    setDisplayCountryPopup(false);
                                }}
                            >
                                Show All
                            </ShowAllButton>
                        )}
                    </Column>
                </ConfigurationItem>

                <ConfigurationItem>
                    <Column>
                        <CheckboxBlock
                            defaultValue={boostValues.mustWatch}
                            title="Must Watch"
                            onChange={(checked: boolean) => onChangeOverrides({ ...boostValues, mustWatch: checked })}
                        />

                        <Column>
                            {boostData.map(({ title, form }) => (
                                <Section key={title} marginBottom={biasBlockMargin} marginTop={biasBlockMargin}>
                                    <BiasSelect
                                        bias={boostValues[form]}
                                        itemFontSize="16px"
                                        itemFontWeight="600"
                                        title={title}
                                        onChangeSelect={onChangeOverrideSelect(form)}
                                    />
                                </Section>
                            ))}
                        </Column>
                    </Column>
                </ConfigurationItem>
                {/* <ConfigurationItem
                subtitle="Target people based on hashtags tagged to your selected videos"
                title="Hashtags"
            >
                <MarginWrapper marginTop={biasTitleMarginTop}>
                    {hashtagsData.map(({ hashtag , viewers }, index) => (
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
                                subtitle={viewers}
                                onChange={onChangeHashtagCheckbox(hashtag)}
                                onChangeSelect={onChangeHashtagSelect(hashtag)}
                            />
                        </Row>
                    ))}
                </MarginWrapper>
            </ConfigurationItem> */}
                <ConfigurationItem withoutLine subtitle="Target people based on their age range" title="Age">
                    <AgeBlockWrapper>
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
                    </AgeBlockWrapper>
                </ConfigurationItem>
            </Column>
            <GrayWrapper isClosed={displayCountryPopup}>
                <AllCountryModalWrapper>
                    <MarginWrapper marginBottom="16px" marginLeft="35px" marginTop="44px">
                        <Row justifyBetween width="419px">
                            <Span fontSize={largeFontSize} fontWeight={defaultFontWeight} lineHeight={largeLineHeight}>
                                Country Names
                            </Span>
                            <LargeClearButton
                                onClick={() => {
                                    setDisplayCountryPopup(true);
                                }}
                            />
                        </Row>
                    </MarginWrapper>
                    <CountryListWrapper>
                        <HiddenScrollBar>
                            {countriesValue.length !== 0 &&
                                countriesValue.map(it => (
                                    <CountryItemWrapper key={it}>
                                        <Row alignCenter justifyBetween height="65px" marginLeft="38px" width="418px">
                                            <Span
                                                fontSize={largeFontSize}
                                                fontWeight={defaultFontWeight}
                                                lineHeight={largeLineHeight}
                                            >
                                                {it}
                                            </Span>
                                            <ClearInputButton
                                                onClick={() => {
                                                    onRemoveCountryBlock(it);
                                                }}
                                            />
                                        </Row>
                                    </CountryItemWrapper>
                                ))}
                        </HiddenScrollBar>
                    </CountryListWrapper>
                </AllCountryModalWrapper>
            </GrayWrapper>
        </ContentWrapper>
    );
};
