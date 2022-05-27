export type Recipe = {
    id:           string;
    title:        string;
    description:  string;
    url:          string;
    prep_time:    string;
    cook_time:    string;
    total_time:   string;
    from:         string;
    by:           string;
    ingredients:  string[];
    instructions: string[];
    likes:        number;
    dislikes:     number;
    video_url?:   string;
    helpful_tip?: string;
    notes?:       string[];
  };