    export interface IBlockchain {
        id: number;
        name: string;
        description?: any;
        created_at: Date;
        updated_at: Date;
    }

    export interface IDAppType {
        id: number;
        type: string;
        description?: any;
        created_at: Date;
        updated_at: Date;
    }

    export interface ICategory {
        id: number;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
    }

    export interface ISocial {
        twitter: string;
        facebook: string;
        telegram: string;
        github: string;
    }

    export interface ISlideShow {
        id: number;
        name: string;
        hash: string;
        sha256: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        provider: string;
        provider_metadata?: any;
        created_at: Date;
        updated_at: Date;
    }

    export interface IDapp {
        id: number;
        name: string;
        website: string;
        description: string;
        blockchain: IBlockchain;
        d_app_type: IDAppType;
        category: ICategory;
        social: ISocial;
        created_at: Date;
        updated_at: Date;
        slide_show: ISlideShow[];
    }

