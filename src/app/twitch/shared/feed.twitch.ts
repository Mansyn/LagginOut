export class Embed {
    request_url: string;
    type: string;
    title: string;
    author_name: string;
    thumbnail_url: string;
    player_html: string;
    provider_name: string;
    created_at: Date;
    game: string;
    video_length: number;
    twitch_type: string;
}

export class Permissions {
    can_reply: boolean;
    can_moderate: boolean;
    can_delete: boolean;
}

export class Links {
    self: string;
}

export class User {
    display_name: string;
    _id: number;
    name: string;
    type: string;
    bio: string;
    created_at: Date;
    updated_at: Date;
    logo: string;
    _links: Links;
}

export class Post {
    id: string;
    body: string;
    comments?: any;
    created_at: Date;
    deleted: boolean;
    embeds: Embed[];
    emotes: any[];
    permissions: Permissions;
    reactions: any[];
    user: User;
}

export class FeedObject {
    _cursor: string;
    _topic: string;
    posts: Post[];
    _total: number;
}