import { useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';

//폰트 사이즈, 폰트 컬러 디자인 나오면 기본 세팅 수정
//별점 이미지 디자인 나오면 수정

type ScoreProps = {
  score?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
  setSendScore?: React.Dispatch<React.SetStateAction<number>>;
};

const Score = ({
  score,
  width,
  height,
  fontColor,
  fontSize,
  setSendScore,
}: ScoreProps) => {
  const [starPercentage, setStarPercentage] = useState(
    score ? (score / 5) * 100 : 0,
  );
  const [isClicking, setIsClicking] = useState(false);
  const scoreWrapRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!isClicking && !score) {
        const rect = scoreWrapRef.current?.getBoundingClientRect();
        if (rect) {
          const offsetX = event.clientX - rect.left;
          const newScore = (offsetX / rect.width) * 100;
          setStarPercentage(newScore);
        }
      }
    },
    [isClicking, score],
  );

  const handleMouseLeave = useCallback(() => {
    if (!isClicking && !score) {
      setStarPercentage(0);
    }
  }, [isClicking, score]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!score) {
        event.stopPropagation();
        setIsClicking(true);
        const rect = scoreWrapRef.current?.getBoundingClientRect();
        if (rect) {
          const offsetX = event.clientX - rect.left;
          const newScore = (offsetX / rect.width) * 100;
          setStarPercentage(newScore);

          if (setSendScore) {
            const sendScore = Math.round((newScore / 20) * 10) / 10;
            setSendScore(sendScore);
          }
        }
      }
    },
    [score, setSendScore],
  );

  return (
    <ScoreWrap width={width} height={height}>
      <ScoreContentsWrap
        ref={scoreWrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            <Img src="/images/yellow_star.svg" alt={`별점 ${index + 1}`} />
          </span>
        ))}
        <FilledStar starPercentage={starPercentage}>
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <img
                src="/images/yellow_filled_star.svg"
                alt={`채워진 별점 ${index + 1}`}
              />
            </span>
          ))}
        </FilledStar>
      </ScoreContentsWrap>
      {score && (
        <ScoreText fontColor={fontColor} fontSize={fontSize}>
          {score}
        </ScoreText>
      )}
    </ScoreWrap>
  );
};

export default Score;

const ScoreWrap = styled.div<{ width?: number; height?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.width !== undefined ? `${props.width}rem` : 'auto')};
  height: ${props =>
    props.height !== undefined ? `${props.height}rem` : 'auto'};
`;

const ScoreContentsWrap = styled.div`
  position: relative;
  display: inline-block;
  z-index: 50;
`;

const FilledStar = styled.span<{ starPercentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  display: flex;
  width: ${props =>
    props.starPercentage === 0 ? '0' : `${props.starPercentage}%`};
  overflow: hidden;
  transition: width 0.2s ease;
  z-index: 5;
`;

const Img = styled.img`
  pointer-events: none;
  z-index: 1;
`;

const ScoreText = styled.p<{ fontColor?: string; fontSize?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props =>
    props.fontSize !== undefined ? `${props.fontSize}rem` : '1rem'};
  color: ${props =>
    props.fontColor !== undefined ? props.fontColor : 'green'};
`;
