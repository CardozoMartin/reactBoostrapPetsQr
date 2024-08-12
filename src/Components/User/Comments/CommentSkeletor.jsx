import React from 'react'
import "../../css/skeletorComment.css"

const CommentSkeletor = () => {
    return (
        <>
         <div className="embla__slide m-3">
            <div className="card o-hidden border-0 shadow-lg skeleton-card cardC">
                <div className="skeleton-img"></div>
                <div className="card-body">
                    <h5 className="card-title text-center">
                        <div className="skeleton-title"></div>
                    </h5>
                    <h4 className="card-subtitle mb-2 text-muted text-center">
                        <div className="skeleton-subtitle"></div>
                    </h4>
                    <p className="card-text">
                        <div className="skeleton-text"></div>
                    </p>
                </div>
            </div>
        </div>
        
        </>
       
       
    )
}

export default CommentSkeletor