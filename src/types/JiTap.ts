export module JiTap {
    export interface Slide {
        design:Design;
        activity?:Activity;
    }
    
    //DESIGN
    export interface Design {
        bg?:string;
        stickers: Array<ImageAsset>;
    }
    
    //ACTIVITIES
    export type Activity = 
        Activity_Questions
        | Activity_Soundboard
        | Activity_Puzzle
        | Activity_SaySomething
        | Activity_Video
        | Activity_TalkType
    
    export enum ActivityKind {
        QUESTIONS = 0,
        SOUNDBOARD = 1,
        PUZZLE = 2,
        SAY_SOMETHING = 3,
        VIDEO = 4,
        TALK_TYPE = 5
    }
    
    //QUESTIONS
    export interface Activity_Questions {
        kind: ActivityKind.QUESTIONS; 
        questions: Array<Question>;
    }
    
    export interface Question {
        label: string;
        trace: Trace;
        audio: QuestionAudio;
    }
    
    export type QuestionAudio = Partial<{
        question: AudioAsset;
        answer: AudioAsset;
        mistake: AudioAsset;
    }>
    
    //SOUNDBOARD 
    export interface Activity_Soundboard {
        kind: ActivityKind.SOUNDBOARD; 
        options: Soundboard_Options;
        items: Array<Soundboard_Item>;
    }
    
    export interface Soundboard_Options {
        introAudio?: AudioAsset;
        bgAudio?: AudioAsset;
        oneTime: boolean;
        showHints: boolean;
    }
    
    export interface Soundboard_Item {
        trace: Trace;
        audio?: AudioAsset;
        jump?: string;
    }
    
    //PUZZLE 
    export interface Activity_Puzzle {
        kind: ActivityKind.PUZZLE; 
        options: Puzzle_Options;
        items: Array<Puzzle_Item>;
    }
    
    export interface Puzzle_Options {
        jump?: string;
        audio?: AudioAsset;
        freePlay: boolean;
        easyMode: boolean;
        disableHints: boolean;
        shapes3d: boolean;
    }
    
    export interface Puzzle_Item {
        trace: Trace;
        audio?: AudioAsset;
    }
    
    //SAY SOMETHING
    export interface Activity_SaySomething {
        kind: ActivityKind.SAY_SOMETHING; 
        audio?: AudioAsset;
        continueAfter: boolean;
        jump?: string;
    }
    
    //VIDEO
    export interface Activity_Video {
        kind: ActivityKind.VIDEO; 
        src?: string;
        type?: VideoType;
    }
    
    export enum VideoType {
        UPLOAD = 0,
        YOUTUBE = 1
    }
    
    //TALK_TYPE 
    export interface Activity_TalkType {
        kind: ActivityKind.TALK_TYPE; 
        options: TalkType_Options;
        items: Array<TalkType_Item>;
    }
    
    export interface TalkType_Options {
        jump?: string;
        audio?: AudioAsset;
        showHints: boolean;
    }
    
    
    export interface TalkType_Item {
        trace: Trace;
        audio?: AudioAsset;
        answer: string;
        answerType: TalkTypeAnswerType;
    }
    
    
    export enum TalkTypeAnswerType {
        KEYBOARD = 0,
        MICROPHONE = 1
    }
    
    //GENERIC OBJECTS
    
    //IMAGES
    export interface ImageAsset {
        src: string;
        type: ImageAssetSourceType;
        position: Point;
        scale: number;
        rotation: number;
    }
    
    export enum ImageAssetSourceType {
        URL = 0,
        HTML = 1
    }
    
    export interface ImageAssetTextSource {
        html: string;
    }
    
    //TRACE
    
    export interface Trace_Rectangle {
        kind: TraceKind; 
        startPoint: Point;
        endPoint: Point;
    }
    
    export enum TraceKind {
        Rectangle = 0 
    }
    
    export type Trace = Trace_Rectangle
    
    //AUDIO
    export interface AudioAsset {
        src: string;
    }
    
    //POINT
    export interface Point {
        x: number;
        y: number; 
    }
}