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
    ageData,
    biasBlockMargin,
    biasValues,
    boostMock,
    checkboxBlockMargin,
    configurationContentPadding,
    manyBiasValues,
    overrideMock,
    VISIBLE_COUNTRIES,
    VISIBLE_CREATORS
} from 'pages/CampaignManager/Campaign/Create/Steps/Configuration/constants';
import React, { FC, useEffect, useState } from 'react';
import { combinedCreatorsStories, creatorsEffects, creatorsEvents } from 'stores/creators';
import { forms } from 'stores/forms';
import { languagesEffects, languagesEvents, languagesStores } from 'stores/languages';
import { countriesEffects, countriesEvents, countriesStores } from 'stores/location';
import { tagsStories } from 'stores/tags';
import { Bias, CreateCampaignStepsProps, MaxSizes, OnChangeSelect, Sizes, Title } from 'types';
import {
    AgeBlockWrapper,
    AllCountryModalWrapper,
    AllCreatorsModalWrapper,
    BiasTitle,
    CheckboxBlockWrapper,
    ClearButton,
    ColumnWrapper,
    ConfigurationItemSubtitle,
    ConfigurationItemTitle,
    ConfigurationItemWrapper,
    CountryBlock,
    CountryBlockWrapper,
    CountryListWrapper,
    CreatorListWrapper,
    GrayWrapper,
    Hashtag,
    HashtagSelectBlock,
    HiddenScrollBar,
    ModalItemWrapper,
    RowWrapper,
    SelectBlock,
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

interface Props {
    title: string;
    onSelectChange: (title: string, e: string) => void;
    onRemove: (title: string) => void;
    weight?: number;
}

const LanguageAndCreatorsBiasSelect = ({ title, onSelectChange, onRemove, weight = 2 }: Props) => (
    <MarginWrapper marginBottom={primaryMargin}>
        <SelectBlock alignCenter justifyBetween>
            <Row>
                <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                    {title}
                </Span>
            </Row>
            <AbsoluteWrapper right="52px" top="16px">
                <Select
                    defaultActive={`${weight}`}
                    itemFontSize="16px"
                    itemFontWeight="600"
                    values={manyBiasValues}
                    width="110px"
                    onChange={e => {
                        onSelectChange(title, e);
                    }}
                />
            </AbsoluteWrapper>
            <ClearButton height="11px" onClick={() => onRemove(title)} />
        </SelectBlock>
    </MarginWrapper>
);

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
    const [displayCreatorsPopup, setDisplayCreatorsPopup] = useState(true);
    const [uniqueHashtags, setUniqueHashtags] = useState<string[]>([]);
    const countriesData = useStore(countriesStores.locations);
    const languagesISO = useStore(languagesStores.languagesISO);
    const clientLanguages = useStore(languagesStores.clientLanguages);
    const [creatorsIds, creators, creatorsData] = useStore(combinedCreatorsStories);
    const creatorsNames = Array.from(new Set(creators))
        .map(it => it.creatorName)
        .filter((item): item is string => typeof item === 'string');
    const countries = countriesData ? countriesData : [''];
    const overridesData = overrideMock;
    const boostData = boostMock;
    const { value: ageValue, onChange: onChangeAge } = useField(forms.createCampaignForm.fields.age);
    const { value: countriesValue, onChange: onChangeCountry } = useField(forms.createCampaignForm.fields.countries);
    const { value: hashtagsValue, onChange: onChangeHashtags } = useField(forms.createCampaignForm.fields.hashtags);
    const { value: overrideValue, onChange: onChangeOverrides } = useField(forms.createCampaignForm.fields.override);
    const { value: boostValues /*, onChange: onChangeBoostValues*/ } = useField(
        forms.createCampaignForm.fields.boostValues
    );
    const { value: languagesValue, onChange: onChangeLanguages } = useField(forms.createCampaignForm.fields.languages);
    const { value: creatorsValue, onChange: onChangeCreators } = useField(forms.createCampaignForm.fields.creators);
    const tagsState = useStore(tagsStories.tags);

    useEffect(() => {
        countriesEffects.getLocations();
        languagesEffects.getLanguages();
        creatorsEffects.getCreators({
            contentIds: creatorsIds
        });
        setUniqueHashtags(Array.from(new Set(tagsState)));
    }, [tagsState, creatorsIds]);

    const getAgeRange = (value: WOM.CampaignAgePromotion) => {
        switch (value) {
            case 0:
                return '15-20';
            case 1:
                return '20-50';
            case 2:
                return '50+';
        }
    };

    const onChangeAgeCheckbox = (value: WOM.CampaignAgePromotion) => (checked: boolean) =>
        checked ? onChangeAge([...ageValue, value]) : onChangeAge(ageValue.filter(item => item !== value));

    const isAgeRangeChecked = (value: WOM.CampaignAgePromotion) => ageValue.some(item => item === value);

    const onChangeCountrySelect = (country: string) => {
        if (!countriesValue.includes(country)) {
            onChangeCountry([...countriesValue, country]);
            countriesEvents.removeCountry(country);
        }
    };

    const onRemoveCountryBlock = (country: string) => {
        const newCountries = countriesValue.filter(it => it !== country);

        onChangeCountry(newCountries);
        countriesEvents.addCountry(country);
    };

    const onChangeHashtagSearchSelect = (hashtag: string) => {
        const item = hashtagsValue.find(it => it.tag === hashtag);

        if (!item) {
            onChangeHashtags([...hashtagsValue, { tag: hashtag, weight: 2 }]);
            setUniqueHashtags(uniqueHashtags.filter(it => it !== hashtag));
        }
    };

    const onChangeHashtagSearchWeight = (hashtag: string | undefined, value: string) => {
        const itemIndex = hashtagsValue.findIndex(it => it.tag === hashtag);

        if (itemIndex > -1) {
            const item = hashtagsValue[itemIndex];
            item.weight = Number(value);
            onChangeHashtags([...hashtagsValue.slice(0, itemIndex), item, ...hashtagsValue.slice(itemIndex + 1)]);
        }
    };

    const onRemoveHashtag = (hashtag: string | undefined) => {
        const newHashtags = hashtagsValue.filter(it => it.tag !== hashtag);
        onChangeHashtags(newHashtags);

        if (hashtag) setUniqueHashtags([hashtag, ...uniqueHashtags]);
    };

    const onChangeOverrideSelect = (form: string) => (active: string) =>
        onChangeOverrides({ ...overrideValue, [form]: active });

    const onChangeLanguagesSelect = (language: string) => {
        const item = languagesISO.find(it => it.name === language);

        if (item) {
            const languageCode = item.code;
            onChangeLanguages([...languagesValue, { languageCode, weight: 2 }]);
            languagesEvents.removeLanguage(language);
        }
    };

    const onRemoveLanguage = (language: string) => {
        const item = languagesISO.find(it => it.name === language);

        if (item) {
            const languageCode = item.code;
            const newLanguages = languagesValue.filter(it => it.languageCode !== languageCode);
            onChangeLanguages(newLanguages);
            languagesEvents.addLanguage(language);
        }
    };

    const onChangeLanguageWeight = (language: string, weight: string) => {
        const item = languagesISO.find(it => it.name === language);

        if (item) {
            const languageCode = item.code;
            const languageIndex = languagesValue.findIndex(it => it.languageCode === languageCode);
            const newLanguageItem = { ...languagesValue[languageIndex], weight: Number(weight) };
            const newLanguagesValue = [...languagesValue];
            newLanguagesValue.splice(languageIndex, 1, newLanguageItem);
            onChangeLanguages(newLanguagesValue);
        }
    };

    const onChangeCreatorsSelect = (creatorName: string) => {
        const item = creatorsData.find(it => it.creatorName === creatorName);

        if (item) {
            const id = typeof item.creatorId === 'string' ? item.creatorId : '';
            onChangeCreators([...creatorsValue, { creatorId: id, weight: 1 }]);
            creatorsEvents.removeCreator(creatorName);
        }
    };

    const onRemoveCreator = (creatorName: string) => {
        const item = creatorsData.find(it => it.creatorName === creatorName);

        if (item) {
            const index = creatorsValue.findIndex(it => it.creatorId === item.creatorId);
            const newCreatorsValue = [...creatorsValue];
            newCreatorsValue.splice(index, 1);
            onChangeCreators(newCreatorsValue);
            creatorsEvents.addCreator({ creatorName, creatorId: item.creatorId });
        }
    };

    const onChangeCreatorsWeight = (creatorName: string, weight: string) => {
        const item = creatorsData.find(it => it.creatorName === creatorName);

        if (item) {
            const index = creatorsValue.findIndex(it => it.creatorId === item.creatorId);
            const newCreatorItem = { ...creatorsValue[index], weight: Number(weight) };
            const newCreatorsValue = [...creatorsValue];
            newCreatorsValue.splice(index, 1, newCreatorItem);
            onChangeCreators(newCreatorsValue);
        }
    };

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

                <ConfigurationItem subtitle="Choose the location(s) of your target audience" title="Country">
                    <Column minHeight="126px">
                        <MarginWrapper marginBottom={biasBlockMargin} marginTop="46px">
                            <SearchSelect
                                defaultValue=""
                                itemsList={[...countries].sort()}
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

                <ConfigurationItem subtitle="Choose the hashtag(s) your target audience follows" title="Hashtags">
                    <Column minHeight="126px">
                        <MarginWrapper marginBottom={biasBlockMargin} marginTop="30px">
                            <SearchSelect
                                defaultValue=""
                                itemsList={[...uniqueHashtags].sort()}
                                placeholder="Search by Hashtags"
                                onItemSelect={onChangeHashtagSearchSelect}
                            />
                        </MarginWrapper>
                        <MarginWrapper marginBottom="22px">
                            {hashtagsValue.length !== 0 && (
                                <MarginWrapper marginBottom="8px" marginLeft="212px">
                                    <Row alignCenter width="56px">
                                        <Span fontSize="13px" fontWeight={defaultFontWeight} lineHeight="17px">
                                            Bias
                                        </Span>
                                    </Row>
                                </MarginWrapper>
                            )}
                            {hashtagsValue?.map(({ tag, weight }) => (
                                <MarginWrapper key={tag} marginBottom={primaryMargin}>
                                    <HashtagSelectBlock alignCenter justifyBetween>
                                        <Hashtag>{tag}</Hashtag>
                                        <AbsoluteWrapper right="52px" top="16px">
                                            <Select
                                                defaultActive={`${weight}`}
                                                itemFontSize="16px"
                                                itemFontWeight="600"
                                                values={biasValues}
                                                width="110px"
                                                onChange={e => {
                                                    onChangeHashtagSearchWeight(tag, e);
                                                }}
                                            />
                                        </AbsoluteWrapper>
                                        <ClearButton height="11px" onClick={() => onRemoveHashtag(tag)} />
                                    </HashtagSelectBlock>
                                </MarginWrapper>
                            ))}
                        </MarginWrapper>
                    </Column>
                </ConfigurationItem>

                <ConfigurationItem subtitle="Choose the language(s) of your target audience" title="Language">
                    <Column minHeight="126px">
                        <MarginWrapper marginBottom={biasBlockMargin} marginTop="27px">
                            <SearchSelect
                                defaultValue=""
                                itemsList={[...clientLanguages].sort()}
                                placeholder="Add Language"
                                onItemSelect={onChangeLanguagesSelect}
                            />
                        </MarginWrapper>
                        <MarginWrapper marginBottom="22px">
                            {languagesValue.length !== 0 && (
                                <MarginWrapper marginBottom="8px" marginLeft="212px">
                                    <Row alignCenter width="56px">
                                        <Span fontSize="13px" fontWeight={defaultFontWeight} lineHeight="17px">
                                            Bias
                                        </Span>
                                    </Row>
                                </MarginWrapper>
                            )}
                            {languagesValue?.map(it => {
                                const item = languagesISO.find(lang => lang.code === it.languageCode);
                                if (item) {
                                    const title = typeof item.name === 'string' ? item.name : '';

                                    return (
                                        <LanguageAndCreatorsBiasSelect
                                            key={title}
                                            title={title}
                                            weight={it.weight}
                                            onRemove={onRemoveLanguage}
                                            onSelectChange={onChangeLanguageWeight}
                                        />
                                    );
                                }
                            })}
                        </MarginWrapper>
                    </Column>
                </ConfigurationItem>

                <ConfigurationItem subtitle="" title="Creator">
                    <Column minHeight="126px">
                        <MarginWrapper marginBottom={biasBlockMargin} marginTop="27px">
                            <SearchSelect
                                defaultValue=""
                                itemsList={[...creatorsNames].sort()}
                                placeholder="Add Creator"
                                onItemSelect={onChangeCreatorsSelect}
                            />
                        </MarginWrapper>
                        <MarginWrapper marginBottom="22px">
                            {creatorsValue.length !== 0 && (
                                <MarginWrapper marginBottom="8px" marginLeft="212px">
                                    <Row alignCenter width="56px">
                                        <Span fontSize="13px" fontWeight={defaultFontWeight} lineHeight="17px">
                                            Bias
                                        </Span>
                                    </Row>
                                </MarginWrapper>
                            )}
                            {creatorsValue.slice(0, VISIBLE_CREATORS).map(({ creatorId, weight }) => {
                                const item = creatorsData.find(it => it.creatorId === creatorId);

                                const title = typeof item?.creatorName === 'string' ? item?.creatorName : '';

                                return (
                                    <LanguageAndCreatorsBiasSelect
                                        key={title}
                                        title={title}
                                        weight={weight}
                                        onRemove={onRemoveCreator}
                                        onSelectChange={onChangeCreatorsWeight}
                                    />
                                );
                            })}
                            {creatorsValue.length > VISIBLE_CREATORS && (
                                <ShowAllButton
                                    onClick={() => {
                                        setDisplayCreatorsPopup(false);
                                    }}
                                >
                                    Show All
                                </ShowAllButton>
                            )}
                        </MarginWrapper>
                    </Column>
                </ConfigurationItem>

                <ConfigurationItem withoutLine subtitle="Choose the age(s) of your target audience" title="Age">
                    <AgeBlockWrapper>
                        {ageData.map(it => (
                            <MarginWrapper
                                key={it}
                                marginBottom={checkboxBlockMargin}
                                marginRight={primaryMargin}
                                marginTop={checkboxBlockMargin}
                            >
                                <CheckboxBlock
                                    defaultValue={isAgeRangeChecked(it)}
                                    title={getAgeRange(it)}
                                    onChange={onChangeAgeCheckbox(it)}
                                />
                            </MarginWrapper>
                        ))}
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
                            <ClearButton
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
                                    <ModalItemWrapper key={it}>
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
                                    </ModalItemWrapper>
                                ))}
                        </HiddenScrollBar>
                    </CountryListWrapper>
                </AllCountryModalWrapper>
            </GrayWrapper>
            {displayCreatorsPopup ? null : (
                <GrayWrapper>
                    <AllCreatorsModalWrapper>
                        <MarginWrapper marginBottom="16px" marginLeft="129px" marginRight="202px" marginTop="44px">
                            <Row alignCenter justifyBetween width="302px">
                                <Span
                                    fontSize={largeFontSize}
                                    fontWeight={defaultFontWeight}
                                    lineHeight={largeLineHeight}
                                >
                                    Creators
                                </Span>
                                <Span
                                    fontSize={largeFontSize}
                                    fontWeight={defaultFontWeight}
                                    lineHeight={largeLineHeight}
                                >
                                    Bias
                                </Span>
                                <AbsoluteWrapper right="40px" top="26px">
                                    <ClearButton
                                        onClick={() => {
                                            setDisplayCreatorsPopup(true);
                                        }}
                                    />
                                </AbsoluteWrapper>
                            </Row>
                        </MarginWrapper>
                        <CreatorListWrapper>
                            <HiddenScrollBar>
                                {creatorsValue.map(({ creatorId, weight }) => {
                                    const item = creatorsData.find(it => it.creatorId === creatorId);

                                    const title = typeof item?.creatorName === 'string' ? item?.creatorName : '';

                                    return (
                                        <ModalItemWrapper key={title}>
                                            <Row
                                                alignCenter
                                                justifyBetween
                                                height="65px"
                                                marginLeft="107px"
                                                marginRight="80px"
                                                width="436px"
                                            >
                                                <Span
                                                    fontSize={largeFontSize}
                                                    fontWeight={defaultFontWeight}
                                                    lineHeight={largeLineHeight}
                                                >
                                                    {item?.creatorName}
                                                </Span>
                                                <AbsoluteWrapper right="176px" top="16px">
                                                    <Select
                                                        defaultActive={`${weight}`}
                                                        itemFontSize="16px"
                                                        itemFontWeight="600"
                                                        values={manyBiasValues}
                                                        width="110px"
                                                        onChange={e => {
                                                            onChangeCreatorsWeight(title, e);
                                                        }}
                                                    />
                                                </AbsoluteWrapper>
                                                <ClearInputButton
                                                    onClick={() => {
                                                        onRemoveCreator(title);
                                                    }}
                                                />
                                            </Row>
                                        </ModalItemWrapper>
                                    );
                                })}
                            </HiddenScrollBar>
                        </CreatorListWrapper>
                    </AllCreatorsModalWrapper>
                </GrayWrapper>
            )}{' '}
        </ContentWrapper>
    );
};
