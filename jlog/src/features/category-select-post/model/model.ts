type GroupDictionary = {
    [year: string]: {
        [category: string]: [string, string, string, string][]; // 동적 카테고리
      };
}

export type { GroupDictionary }