
export const updateUserFollowStatus =  <T extends { [key in K]: any }, K extends keyof T>(
	items: T[], 
  itemId: T[K], 
	propName: K, 
	objProp: Partial<T>
  ) => {
    return items.map((item: T) =>
       item[propName] === itemId ? { ...item, ...objProp } : item
    );
  };

  
