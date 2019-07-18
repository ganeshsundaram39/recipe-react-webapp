import React from 'react';
import classes from './All-Recipes-Sidebar.module.scss';

export const AllRecipesSidebar = props => {
  const { allRecipeTitles } = props;
  return (
    <div className={classes['all-recipes__sidebar']}>
      {allRecipeTitles.length > 0 &&
        allRecipeTitles.map(recipe => (
          <div key={recipe[0]} className={classes['recipe-name-wrapper']}>
            <div className={classes['recipe__name']}>
              {recipe[1]}{' '}
              <i
                className="fas fa-trash"
                title="Delete this recipe."
                onClick={props.deleteRecipe.bind(null, recipe[0])}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
