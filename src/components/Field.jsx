import React, {useEffect, useState} from 'react';

export function Field(props){

    return (
        <label className="field field--checkbox sidebar__field" data-element="field">
            <input type="checkbox" value={value} onChange={() => setIsActiveFilter(prev => !prev)} />
                   <span className="field__checkbox-substitute">

                 </span>
                <span className="field__info">
                  <span className="field__name">
                     {value}
                 </span>
              </span>
        </label>
    )
}