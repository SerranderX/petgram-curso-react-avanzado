import React, {Fragment} from 'react';
import {ImgWrapper, Img, PhotoCardContainer} from '@components/PhotoCard/style';
import { useNearScreen } from '@hooks/useNearScreen';
import { FavButton } from '@components/FavButton';
import { useMuationToogleLike } from '@containers/ToggleLikeMutation';
import { Link } from '@reach/router';
import propTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'; 

export const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
    const [show, ref] = useNearScreen();
    const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
    const handleFavClick = () => {
        mutation({
          variables: {
            input: { id }
          }
        })
    }
    
    return (
        <PhotoCardContainer ref={ref}>
            {
                show && (
                    <Fragment>
                        <Link to={`/detail/${id}`}>
                            <ImgWrapper>
                                <Img src={src} alt={id}/>
                            </ImgWrapper>
                        </Link>
                        <FavButton liked={liked} likes={likes} handlerClick={handleFavClick}/>
                    </Fragment>
                )
            }
        </PhotoCardContainer>
    );
};

PhotoCard.propTypes = {
    id: propTypes.string.isRequired,
    liked: propTypes.bool.isRequired,
    src: propTypes.string.isRequired,
    likes: function(props, propName, componentsName) {
        const propValue = props[propName];

        if (propValue === undefined) {
            return new Error(`${componentsName} doesn't have any likes`);
        }

        if (propValue < 0) {
            return new Error(`${componentsName} can't have negative likes`);
        }
    }
}