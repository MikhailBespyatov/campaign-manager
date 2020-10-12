import { StyledVideo } from 'components/common/Video/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import Hls from 'hls.js';
import React, { useEffect, useRef } from 'react';

interface Props {
    src: string;
    poster?: string;
    controls?: boolean;
    isPlaying?: boolean;
}

export const Video = ({ src, poster, controls = false, isPlaying = false }: Props) => {
    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // isPlaying && src ? video?.current?.play() : video?.current?.pause();
        if (isPlaying && Hls.isSupported() && src && video.current) {
            var hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video.current);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video?.current?.play();
            });
        } else video?.current?.pause();
    }, [isPlaying, src]);

    return <StyledVideo ref={video} controls={controls} poster={poster} preload="metadata" />;
};

export const AbsoluteVideo = ({ isPlaying, ...rest }: Props) => (
    <AbsoluteWrapper height="100%" left="0" top="0" width="100%" zIndex={isPlaying ? '-1' : '-3'}>
        <Video {...rest} isPlaying={isPlaying} />
    </AbsoluteWrapper>
);
