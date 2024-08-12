import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = ({ comments, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="container mt-4">
            <h1 className='display-4 text-center mb-4'>Comentarios</h1>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container d-flex ">
                        {comments.map((comment, index) => (
                            <div className="embla__slide m-3" key={index}>
                                <div className="card o-hidden border-0 shadow-lg cardC">
                                    <img src={comment.image} alt="Random" className="card-img-top rounded-lg img-fixed-size img-fluid " />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            <span className="badge bg-info text-dark">PetQr</span>
                                        </h5>
                                        <h4 className="card-subtitle mb-2 text-muted text-center">{comment.userName}</h4>
                                        <p className="card-text">{comment.comments}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__controls">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="btn btn-primary m-2" />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className="btn btn-primary" />
                </div>

                
            </div>
        </section>
    );
};

export default EmblaCarousel;
