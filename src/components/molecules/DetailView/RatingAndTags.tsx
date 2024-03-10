import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';
import Rating from '../Rating';

interface RatingAndTagsProps {
  rating: number;
  tags: string[];
}
const RatingAndTags = ({ rating, tags }: RatingAndTagsProps) => {
  return (
    <RatingAndTagWrap>
      <RatingWrap>
        <Rating rating={rating} />
      </RatingWrap>
      <TagsWrap>
        {tags.map((tag, i) => (
          <TagWrap key={i}>
            <Label content={tag} size={'1.4rem'}></Label>
          </TagWrap>
        ))}
      </TagsWrap>
    </RatingAndTagWrap>
  );
};

const RatingAndTagWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.8rem 0;
`;

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
`;

const TagsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
`;

const TagWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0.2rem;
`;

export default RatingAndTags;
