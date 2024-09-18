import { AnimationEvent, AriaAttributes, ClipboardEvent, Component, CompositionEvent, DragEvent, FocusEvent, FormEvent, FunctionComponent, KeyboardEvent, MouseEvent, PointerEvent, ReactElement, ReactNode, SVGProps, SyntheticEvent, TouchEvent, TransitionEvent, UIEvent, WheelEvent, JSX } from 'react';
import { ScaleContinuousNumeric as D3ScaleContinuousNumeric } from 'victory-vendor/d3-scale';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
export type StackOffsetType = 'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette' | 'positive';
export type LayoutType = 'horizontal' | 'vertical' | 'centric' | 'radial';
export type PolarLayoutType = 'radial' | 'centric';
export type AxisType = 'xAxis' | 'yAxis' | 'zAxis' | 'angleAxis' | 'radiusAxis';
export type DataKey<T> = string | number | ((obj: T) => any);
export type PresentationAttributesWithProps<P, T> = AriaAttributes & DOMAttributesWithProps<P, T> & Omit<SVGProps<T>, keyof DOMAttributesWithProps<P, T>>;
export type PresentationAttributesAdaptChildEvent<P, T> = AriaAttributes & DOMAttributesAdaptChildEvent<P, T> & Omit<SVGProps<T>, keyof DOMAttributesAdaptChildEvent<P, T>>;
export type SymbolType = 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
export type LegendType = 'plainline' | 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye' | 'none';
export type TooltipType = 'none';
export type AllowInDimension = {
    x?: boolean;
    y?: boolean;
};
export interface Coordinate {
    x: number;
    y: number;
}
export interface ChartCoordinate extends Coordinate {
    xAxis?: any;
    yAxis?: any;
    width?: any;
    height?: any;
    offset?: ChartOffset;
    angle?: number;
    radius?: number;
    cx?: number;
    cy?: number;
    startAngle?: number;
    endAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
}
export type ScaleType = 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' | 'threshold';
type EventHandler<P, E extends SyntheticEvent<any>> = {
    bivarianceHack(props: P, event: E): void;
}['bivarianceHack'];
type ReactEventHandler<P, T = Element> = EventHandler<P, SyntheticEvent<T>>;
type ClipboardEventHandler<P, T = Element> = EventHandler<P, ClipboardEvent<T>>;
type CompositionEventHandler<P, T = Element> = EventHandler<P, CompositionEvent<T>>;
type DragEventHandler<P, T = Element> = EventHandler<P, DragEvent<T>>;
type FocusEventHandler<P, T = Element> = EventHandler<P, FocusEvent<T>>;
type FormEventHandler<P, T = Element> = EventHandler<P, FormEvent<T>>;
type KeyboardEventHandler<P, T = Element> = EventHandler<P, KeyboardEvent<T>>;
type MouseEventHandler<P, T = Element> = EventHandler<P, MouseEvent<T>>;
type TouchEventHandler<P, T = Element> = EventHandler<P, TouchEvent<T>>;
type PointerEventHandler<P, T = Element> = EventHandler<P, PointerEvent<T>>;
type UIEventHandler<P, T = Element> = EventHandler<P, UIEvent<T>>;
type WheelEventHandler<P, T = Element> = EventHandler<P, WheelEvent<T>>;
type AnimationEventHandler<P, T = Element> = EventHandler<P, AnimationEvent<T>>;
type TransitionEventHandler<P, T = Element> = EventHandler<P, TransitionEvent<T>>;
export interface DOMAttributesWithProps<P, T> {
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: ClipboardEventHandler<P, T>;
    onCopyCapture?: ClipboardEventHandler<P, T>;
    onCut?: ClipboardEventHandler<P, T>;
    onCutCapture?: ClipboardEventHandler<P, T>;
    onPaste?: ClipboardEventHandler<P, T>;
    onPasteCapture?: ClipboardEventHandler<P, T>;
    onCompositionEnd?: CompositionEventHandler<P, T>;
    onCompositionEndCapture?: CompositionEventHandler<P, T>;
    onCompositionStart?: CompositionEventHandler<P, T>;
    onCompositionStartCapture?: CompositionEventHandler<P, T>;
    onCompositionUpdate?: CompositionEventHandler<P, T>;
    onCompositionUpdateCapture?: CompositionEventHandler<P, T>;
    onFocus?: FocusEventHandler<P, T>;
    onFocusCapture?: FocusEventHandler<P, T>;
    onBlur?: FocusEventHandler<P, T>;
    onBlurCapture?: FocusEventHandler<P, T>;
    onChange?: FormEventHandler<P, T>;
    onChangeCapture?: FormEventHandler<P, T>;
    onBeforeInput?: FormEventHandler<P, T>;
    onBeforeInputCapture?: FormEventHandler<P, T>;
    onInput?: FormEventHandler<P, T>;
    onInputCapture?: FormEventHandler<P, T>;
    onReset?: FormEventHandler<P, T>;
    onResetCapture?: FormEventHandler<P, T>;
    onSubmit?: FormEventHandler<P, T>;
    onSubmitCapture?: FormEventHandler<P, T>;
    onInvalid?: FormEventHandler<P, T>;
    onInvalidCapture?: FormEventHandler<P, T>;
    onLoad?: ReactEventHandler<P, T>;
    onLoadCapture?: ReactEventHandler<P, T>;
    onError?: ReactEventHandler<P, T>;
    onErrorCapture?: ReactEventHandler<P, T>;
    onKeyDown?: KeyboardEventHandler<P, T>;
    onKeyDownCapture?: KeyboardEventHandler<P, T>;
    onKeyPress?: KeyboardEventHandler<P, T>;
    onKeyPressCapture?: KeyboardEventHandler<P, T>;
    onKeyUp?: KeyboardEventHandler<P, T>;
    onKeyUpCapture?: KeyboardEventHandler<P, T>;
    onAbort?: ReactEventHandler<P, T>;
    onAbortCapture?: ReactEventHandler<P, T>;
    onCanPlay?: ReactEventHandler<P, T>;
    onCanPlayCapture?: ReactEventHandler<P, T>;
    onCanPlayThrough?: ReactEventHandler<P, T>;
    onCanPlayThroughCapture?: ReactEventHandler<P, T>;
    onDurationChange?: ReactEventHandler<P, T>;
    onDurationChangeCapture?: ReactEventHandler<P, T>;
    onEmptied?: ReactEventHandler<P, T>;
    onEmptiedCapture?: ReactEventHandler<P, T>;
    onEncrypted?: ReactEventHandler<P, T>;
    onEncryptedCapture?: ReactEventHandler<P, T>;
    onEnded?: ReactEventHandler<P, T>;
    onEndedCapture?: ReactEventHandler<P, T>;
    onLoadedData?: ReactEventHandler<P, T>;
    onLoadedDataCapture?: ReactEventHandler<P, T>;
    onLoadedMetadata?: ReactEventHandler<P, T>;
    onLoadedMetadataCapture?: ReactEventHandler<P, T>;
    onLoadStart?: ReactEventHandler<P, T>;
    onLoadStartCapture?: ReactEventHandler<P, T>;
    onPause?: ReactEventHandler<P, T>;
    onPauseCapture?: ReactEventHandler<P, T>;
    onPlay?: ReactEventHandler<P, T>;
    onPlayCapture?: ReactEventHandler<P, T>;
    onPlaying?: ReactEventHandler<P, T>;
    onPlayingCapture?: ReactEventHandler<P, T>;
    onProgress?: ReactEventHandler<P, T>;
    onProgressCapture?: ReactEventHandler<P, T>;
    onRateChange?: ReactEventHandler<P, T>;
    onRateChangeCapture?: ReactEventHandler<P, T>;
    onSeeked?: ReactEventHandler<P, T>;
    onSeekedCapture?: ReactEventHandler<P, T>;
    onSeeking?: ReactEventHandler<P, T>;
    onSeekingCapture?: ReactEventHandler<P, T>;
    onStalled?: ReactEventHandler<P, T>;
    onStalledCapture?: ReactEventHandler<P, T>;
    onSuspend?: ReactEventHandler<P, T>;
    onSuspendCapture?: ReactEventHandler<P, T>;
    onTimeUpdate?: ReactEventHandler<P, T>;
    onTimeUpdateCapture?: ReactEventHandler<P, T>;
    onVolumeChange?: ReactEventHandler<P, T>;
    onVolumeChangeCapture?: ReactEventHandler<P, T>;
    onWaiting?: ReactEventHandler<P, T>;
    onWaitingCapture?: ReactEventHandler<P, T>;
    onAuxClick?: MouseEventHandler<P, T>;
    onAuxClickCapture?: MouseEventHandler<P, T>;
    onClick?: MouseEventHandler<P, T>;
    onClickCapture?: MouseEventHandler<P, T>;
    onContextMenu?: MouseEventHandler<P, T>;
    onContextMenuCapture?: MouseEventHandler<P, T>;
    onDoubleClick?: MouseEventHandler<P, T>;
    onDoubleClickCapture?: MouseEventHandler<P, T>;
    onDrag?: DragEventHandler<P, T>;
    onDragCapture?: DragEventHandler<P, T>;
    onDragEnd?: DragEventHandler<P, T>;
    onDragEndCapture?: DragEventHandler<P, T>;
    onDragEnter?: DragEventHandler<P, T>;
    onDragEnterCapture?: DragEventHandler<P, T>;
    onDragExit?: DragEventHandler<P, T>;
    onDragExitCapture?: DragEventHandler<P, T>;
    onDragLeave?: DragEventHandler<P, T>;
    onDragLeaveCapture?: DragEventHandler<P, T>;
    onDragOver?: DragEventHandler<P, T>;
    onDragOverCapture?: DragEventHandler<P, T>;
    onDragStart?: DragEventHandler<P, T>;
    onDragStartCapture?: DragEventHandler<P, T>;
    onDrop?: DragEventHandler<P, T>;
    onDropCapture?: DragEventHandler<P, T>;
    onMouseDown?: MouseEventHandler<P, T>;
    onMouseDownCapture?: MouseEventHandler<P, T>;
    onMouseEnter?: MouseEventHandler<P, T>;
    onMouseLeave?: MouseEventHandler<P, T>;
    onMouseMove?: MouseEventHandler<P, T>;
    onMouseMoveCapture?: MouseEventHandler<P, T>;
    onMouseOut?: MouseEventHandler<P, T>;
    onMouseOutCapture?: MouseEventHandler<P, T>;
    onMouseOver?: MouseEventHandler<P, T>;
    onMouseOverCapture?: MouseEventHandler<P, T>;
    onMouseUp?: MouseEventHandler<P, T>;
    onMouseUpCapture?: MouseEventHandler<P, T>;
    onSelect?: ReactEventHandler<P, T>;
    onSelectCapture?: ReactEventHandler<P, T>;
    onTouchCancel?: TouchEventHandler<P, T>;
    onTouchCancelCapture?: TouchEventHandler<P, T>;
    onTouchEnd?: TouchEventHandler<P, T>;
    onTouchEndCapture?: TouchEventHandler<P, T>;
    onTouchMove?: TouchEventHandler<P, T>;
    onTouchMoveCapture?: TouchEventHandler<P, T>;
    onTouchStart?: TouchEventHandler<P, T>;
    onTouchStartCapture?: TouchEventHandler<P, T>;
    onPointerDown?: PointerEventHandler<P, T>;
    onPointerDownCapture?: PointerEventHandler<P, T>;
    onPointerMove?: PointerEventHandler<P, T>;
    onPointerMoveCapture?: PointerEventHandler<P, T>;
    onPointerUp?: PointerEventHandler<P, T>;
    onPointerUpCapture?: PointerEventHandler<P, T>;
    onPointerCancel?: PointerEventHandler<P, T>;
    onPointerCancelCapture?: PointerEventHandler<P, T>;
    onPointerEnter?: PointerEventHandler<P, T>;
    onPointerEnterCapture?: PointerEventHandler<P, T>;
    onPointerLeave?: PointerEventHandler<P, T>;
    onPointerLeaveCapture?: PointerEventHandler<P, T>;
    onPointerOver?: PointerEventHandler<P, T>;
    onPointerOverCapture?: PointerEventHandler<P, T>;
    onPointerOut?: PointerEventHandler<P, T>;
    onPointerOutCapture?: PointerEventHandler<P, T>;
    onGotPointerCapture?: PointerEventHandler<P, T>;
    onGotPointerCaptureCapture?: PointerEventHandler<P, T>;
    onLostPointerCapture?: PointerEventHandler<P, T>;
    onLostPointerCaptureCapture?: PointerEventHandler<P, T>;
    onScroll?: UIEventHandler<P, T>;
    onScrollCapture?: UIEventHandler<P, T>;
    onWheel?: WheelEventHandler<P, T>;
    onWheelCapture?: WheelEventHandler<P, T>;
    onAnimationStart?: AnimationEventHandler<P, T>;
    onAnimationStartCapture?: AnimationEventHandler<P, T>;
    onAnimationEnd?: AnimationEventHandler<P, T>;
    onAnimationEndCapture?: AnimationEventHandler<P, T>;
    onAnimationIteration?: AnimationEventHandler<P, T>;
    onAnimationIterationCapture?: AnimationEventHandler<P, T>;
    onTransitionEnd?: TransitionEventHandler<P, T>;
    onTransitionEndCapture?: TransitionEventHandler<P, T>;
}
type AdaptChildEventHandler<P, E extends SyntheticEvent<any>> = {
    bivarianceHack(data: P, index: number, event: E): void;
}['bivarianceHack'];
type AdaptChildReactEventHandler<P, T = Element> = AdaptChildEventHandler<P, SyntheticEvent<T>>;
type AdaptChildClipboardEventHandler<P, T = Element> = AdaptChildEventHandler<P, ClipboardEvent<T>>;
type AdaptChildCompositionEventHandler<P, T = Element> = AdaptChildEventHandler<P, CompositionEvent<T>>;
type AdaptChildDragEventHandler<P, T = Element> = AdaptChildEventHandler<P, DragEvent<T>>;
type AdaptChildFocusEventHandler<P, T = Element> = AdaptChildEventHandler<P, FocusEvent<T>>;
type AdaptChildFormEventHandler<P, T = Element> = AdaptChildEventHandler<P, FormEvent<T>>;
type AdaptChildKeyboardEventHandler<P, T = Element> = AdaptChildEventHandler<P, KeyboardEvent<T>>;
type AdaptChildMouseEventHandler<P, T = Element> = AdaptChildEventHandler<P, MouseEvent<T>>;
type AdaptChildTouchEventHandler<P, T = Element> = AdaptChildEventHandler<P, TouchEvent<T>>;
type AdaptChildPointerEventHandler<P, T = Element> = AdaptChildEventHandler<P, PointerEvent<T>>;
type AdaptChildUIEventHandler<P, T = Element> = AdaptChildEventHandler<P, UIEvent<T>>;
type AdaptChildWheelEventHandler<P, T = Element> = AdaptChildEventHandler<P, WheelEvent<T>>;
type AdaptChildAnimationEventHandler<P, T = Element> = AdaptChildEventHandler<P, AnimationEvent<T>>;
type AdaptChildTransitionEventHandler<P, T = Element> = AdaptChildEventHandler<P, TransitionEvent<T>>;
export type DOMAttributesAdaptChildEvent<P, T> = {
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: AdaptChildClipboardEventHandler<P, T>;
    onCopyCapture?: AdaptChildClipboardEventHandler<P, T>;
    onCut?: AdaptChildClipboardEventHandler<P, T>;
    onCutCapture?: AdaptChildClipboardEventHandler<P, T>;
    onPaste?: AdaptChildClipboardEventHandler<P, T>;
    onPasteCapture?: AdaptChildClipboardEventHandler<P, T>;
    onCompositionEnd?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionEndCapture?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionStart?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionStartCapture?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionUpdate?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionUpdateCapture?: AdaptChildCompositionEventHandler<P, T>;
    onFocus?: AdaptChildFocusEventHandler<P, T>;
    onFocusCapture?: AdaptChildFocusEventHandler<P, T>;
    onBlur?: AdaptChildFocusEventHandler<P, T>;
    onBlurCapture?: AdaptChildFocusEventHandler<P, T>;
    onChange?: AdaptChildFormEventHandler<P, T>;
    onChangeCapture?: AdaptChildFormEventHandler<P, T>;
    onBeforeInput?: AdaptChildFormEventHandler<P, T>;
    onBeforeInputCapture?: AdaptChildFormEventHandler<P, T>;
    onInput?: AdaptChildFormEventHandler<P, T>;
    onInputCapture?: AdaptChildFormEventHandler<P, T>;
    onReset?: AdaptChildFormEventHandler<P, T>;
    onResetCapture?: AdaptChildFormEventHandler<P, T>;
    onSubmit?: AdaptChildFormEventHandler<P, T>;
    onSubmitCapture?: AdaptChildFormEventHandler<P, T>;
    onInvalid?: AdaptChildFormEventHandler<P, T>;
    onInvalidCapture?: AdaptChildFormEventHandler<P, T>;
    onLoad?: AdaptChildReactEventHandler<P, T>;
    onLoadCapture?: AdaptChildReactEventHandler<P, T>;
    onError?: AdaptChildReactEventHandler<P, T>;
    onErrorCapture?: AdaptChildReactEventHandler<P, T>;
    onKeyDown?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyDownCapture?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyPress?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyPressCapture?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyUp?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyUpCapture?: AdaptChildKeyboardEventHandler<P, T>;
    onAbort?: AdaptChildReactEventHandler<P, T>;
    onAbortCapture?: AdaptChildReactEventHandler<P, T>;
    onCanPlay?: AdaptChildReactEventHandler<P, T>;
    onCanPlayCapture?: AdaptChildReactEventHandler<P, T>;
    onCanPlayThrough?: AdaptChildReactEventHandler<P, T>;
    onCanPlayThroughCapture?: AdaptChildReactEventHandler<P, T>;
    onDurationChange?: AdaptChildReactEventHandler<P, T>;
    onDurationChangeCapture?: AdaptChildReactEventHandler<P, T>;
    onEmptied?: AdaptChildReactEventHandler<P, T>;
    onEmptiedCapture?: AdaptChildReactEventHandler<P, T>;
    onEncrypted?: AdaptChildReactEventHandler<P, T>;
    onEncryptedCapture?: AdaptChildReactEventHandler<P, T>;
    onEnded?: AdaptChildReactEventHandler<P, T>;
    onEndedCapture?: AdaptChildReactEventHandler<P, T>;
    onLoadedData?: AdaptChildReactEventHandler<P, T>;
    onLoadedDataCapture?: AdaptChildReactEventHandler<P, T>;
    onLoadedMetadata?: AdaptChildReactEventHandler<P, T>;
    onLoadedMetadataCapture?: AdaptChildReactEventHandler<P, T>;
    onLoadStart?: AdaptChildReactEventHandler<P, T>;
    onLoadStartCapture?: AdaptChildReactEventHandler<P, T>;
    onPause?: AdaptChildReactEventHandler<P, T>;
    onPauseCapture?: AdaptChildReactEventHandler<P, T>;
    onPlay?: AdaptChildReactEventHandler<P, T>;
    onPlayCapture?: AdaptChildReactEventHandler<P, T>;
    onPlaying?: AdaptChildReactEventHandler<P, T>;
    onPlayingCapture?: AdaptChildReactEventHandler<P, T>;
    onProgress?: AdaptChildReactEventHandler<P, T>;
    onProgressCapture?: AdaptChildReactEventHandler<P, T>;
    onRateChange?: AdaptChildReactEventHandler<P, T>;
    onRateChangeCapture?: AdaptChildReactEventHandler<P, T>;
    onSeeked?: AdaptChildReactEventHandler<P, T>;
    onSeekedCapture?: AdaptChildReactEventHandler<P, T>;
    onSeeking?: AdaptChildReactEventHandler<P, T>;
    onSeekingCapture?: AdaptChildReactEventHandler<P, T>;
    onStalled?: AdaptChildReactEventHandler<P, T>;
    onStalledCapture?: AdaptChildReactEventHandler<P, T>;
    onSuspend?: AdaptChildReactEventHandler<P, T>;
    onSuspendCapture?: AdaptChildReactEventHandler<P, T>;
    onTimeUpdate?: AdaptChildReactEventHandler<P, T>;
    onTimeUpdateCapture?: AdaptChildReactEventHandler<P, T>;
    onVolumeChange?: AdaptChildReactEventHandler<P, T>;
    onVolumeChangeCapture?: AdaptChildReactEventHandler<P, T>;
    onWaiting?: AdaptChildReactEventHandler<P, T>;
    onWaitingCapture?: AdaptChildReactEventHandler<P, T>;
    onAuxClick?: AdaptChildMouseEventHandler<P, T>;
    onAuxClickCapture?: AdaptChildMouseEventHandler<P, T>;
    onClick?: AdaptChildMouseEventHandler<P, T>;
    onClickCapture?: AdaptChildMouseEventHandler<P, T>;
    onContextMenu?: AdaptChildMouseEventHandler<P, T>;
    onContextMenuCapture?: AdaptChildMouseEventHandler<P, T>;
    onDoubleClick?: AdaptChildMouseEventHandler<P, T>;
    onDoubleClickCapture?: AdaptChildMouseEventHandler<P, T>;
    onDrag?: AdaptChildDragEventHandler<P, T>;
    onDragCapture?: AdaptChildDragEventHandler<P, T>;
    onDragEnd?: AdaptChildDragEventHandler<P, T>;
    onDragEndCapture?: AdaptChildDragEventHandler<P, T>;
    onDragEnter?: AdaptChildDragEventHandler<P, T>;
    onDragEnterCapture?: AdaptChildDragEventHandler<P, T>;
    onDragExit?: AdaptChildDragEventHandler<P, T>;
    onDragExitCapture?: AdaptChildDragEventHandler<P, T>;
    onDragLeave?: AdaptChildDragEventHandler<P, T>;
    onDragLeaveCapture?: AdaptChildDragEventHandler<P, T>;
    onDragOver?: AdaptChildDragEventHandler<P, T>;
    onDragOverCapture?: AdaptChildDragEventHandler<P, T>;
    onDragStart?: AdaptChildDragEventHandler<P, T>;
    onDragStartCapture?: AdaptChildDragEventHandler<P, T>;
    onDrop?: AdaptChildDragEventHandler<P, T>;
    onDropCapture?: AdaptChildDragEventHandler<P, T>;
    onMouseDown?: AdaptChildMouseEventHandler<P, T>;
    onMouseDownCapture?: AdaptChildMouseEventHandler<P, T>;
    onMouseEnter?: AdaptChildMouseEventHandler<P, T>;
    onMouseLeave?: AdaptChildMouseEventHandler<P, T>;
    onMouseMove?: AdaptChildMouseEventHandler<P, T>;
    onMouseMoveCapture?: AdaptChildMouseEventHandler<P, T>;
    onMouseOut?: AdaptChildMouseEventHandler<P, T>;
    onMouseOutCapture?: AdaptChildMouseEventHandler<P, T>;
    onMouseOver?: AdaptChildMouseEventHandler<P, T>;
    onMouseOverCapture?: AdaptChildMouseEventHandler<P, T>;
    onMouseUp?: AdaptChildMouseEventHandler<P, T>;
    onMouseUpCapture?: AdaptChildMouseEventHandler<P, T>;
    onSelect?: AdaptChildReactEventHandler<P, T>;
    onSelectCapture?: AdaptChildReactEventHandler<P, T>;
    onTouchCancel?: AdaptChildTouchEventHandler<P, T>;
    onTouchCancelCapture?: AdaptChildTouchEventHandler<P, T>;
    onTouchEnd?: AdaptChildTouchEventHandler<P, T>;
    onTouchEndCapture?: AdaptChildTouchEventHandler<P, T>;
    onTouchMove?: AdaptChildTouchEventHandler<P, T>;
    onTouchMoveCapture?: AdaptChildTouchEventHandler<P, T>;
    onTouchStart?: AdaptChildTouchEventHandler<P, T>;
    onTouchStartCapture?: AdaptChildTouchEventHandler<P, T>;
    onPointerDown?: AdaptChildPointerEventHandler<P, T>;
    onPointerDownCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerMove?: AdaptChildPointerEventHandler<P, T>;
    onPointerMoveCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerUp?: AdaptChildPointerEventHandler<P, T>;
    onPointerUpCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerCancel?: AdaptChildPointerEventHandler<P, T>;
    onPointerCancelCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerEnter?: AdaptChildPointerEventHandler<P, T>;
    onPointerEnterCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerLeave?: AdaptChildPointerEventHandler<P, T>;
    onPointerLeaveCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerOver?: AdaptChildPointerEventHandler<P, T>;
    onPointerOverCapture?: AdaptChildPointerEventHandler<P, T>;
    onPointerOut?: AdaptChildPointerEventHandler<P, T>;
    onPointerOutCapture?: AdaptChildPointerEventHandler<P, T>;
    onGotPointerCapture?: AdaptChildPointerEventHandler<P, T>;
    onGotPointerCaptureCapture?: AdaptChildPointerEventHandler<P, T>;
    onLostPointerCapture?: AdaptChildPointerEventHandler<P, T>;
    onLostPointerCaptureCapture?: AdaptChildPointerEventHandler<P, T>;
    onScroll?: AdaptChildUIEventHandler<P, T>;
    onScrollCapture?: AdaptChildUIEventHandler<P, T>;
    onWheel?: AdaptChildWheelEventHandler<P, T>;
    onWheelCapture?: AdaptChildWheelEventHandler<P, T>;
    onAnimationStart?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationStartCapture?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationEnd?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationEndCapture?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationIteration?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationIterationCapture?: AdaptChildAnimationEventHandler<P, T>;
    onTransitionEnd?: AdaptChildTransitionEventHandler<P, T>;
    onTransitionEndCapture?: AdaptChildTransitionEventHandler<P, T>;
};
export declare const SVGElementPropKeys: string[];
export type FilteredSvgElementType = 'svg' | 'polyline' | 'polygon';
export declare const FilteredElementKeyMap: Record<FilteredSvgElementType, string[]>;
export declare const EventKeys: string[];
export type AnimationTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
export type AnimationDuration = number;
export interface ChartOffset {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
    brushBottom?: number;
}
export interface Padding {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}
export interface GeometrySector {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
    cornerRadius?: number;
    forceCornerRadius?: boolean;
    cornerIsExternal?: boolean;
}
export type D3Scale<T> = D3ScaleContinuousNumeric<T, number>;
export type AxisDomainItem = string | number | Function | 'auto' | 'dataMin' | 'dataMax';
export type AxisDomain = string[] | number[] | [AxisDomainItem, AxisDomainItem] | (([dataMin, dataMax]: [number, number], allowDataOverflow: boolean) => [number, number]);
export type NumberDomain = [min: number, max: number];
export type CategoricalDomain = (number | string | Date)[];
export interface BaseAxisProps {
    type?: 'number' | 'category';
    dataKey?: DataKey<any>;
    hide?: boolean;
    scale?: ScaleType | Function;
    tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
    tickCount?: number;
    axisLine?: boolean | SVGProps<SVGLineElement>;
    tickLine?: boolean | SVGProps<SVGTextElement>;
    tickSize?: number;
    tickFormatter?: (value: any, index: number) => string;
    allowDataOverflow?: boolean;
    allowDuplicatedCategory?: boolean;
    allowDecimals?: boolean;
    domain?: AxisDomain;
    includeHidden?: boolean;
    name?: string;
    unit?: string | number;
    axisType?: AxisType;
    range?: Array<number>;
    AxisComp?: any;
    label?: string | number | ReactElement | object;
    className?: string;
}
export type AxisInterval = number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd' | 'equidistantPreserveStart';
export interface TickItem {
    value?: any;
    coordinate: number;
    index?: number;
}
export interface CartesianTickItem extends TickItem {
    tickCoord?: number;
    tickSize?: number;
    isShow?: boolean;
}
export interface Margin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export interface CartesianViewBox {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export interface PolarViewBox {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
    clockWise?: boolean;
}
export type ViewBox = CartesianViewBox | PolarViewBox;
type RecordString<T> = Record<string, T>;
type AdaptEventHandlersReturn = RecordString<(e?: Event) => any> | RecordString<(e: Event) => void> | null;
export declare const adaptEventHandlers: (props: RecordString<any> | Component | FunctionComponent | boolean, newHandler?: (e?: Event) => any) => AdaptEventHandlersReturn;
export declare const adaptEventsOfChild: (props: RecordString<any>, data: any, index: number) => RecordString<(e?: Event) => any>;
export type TooltipEventType = 'axis' | 'item';
export interface CategoricalChartOptions {
    chartName?: string;
    GraphicalChild?: any;
    defaultTooltipEventType?: TooltipEventType;
    validateTooltipEventTypes?: ReadonlyArray<TooltipEventType>;
    axisComponents?: BaseAxisProps[];
    legendContent?: 'children';
    formatAxisMap?: any;
    defaultProps?: any;
}
export interface TreemapNode {
    x: number;
    y: number;
    width: number;
    height: number;
    depth: number;
    index: number;
    children?: any;
    name: string;
    value: number;
    [k: string]: any;
}
export interface SankeyNode {
    x: number;
    y: number;
    dx: number;
    dy: number;
    depth: number;
    value: number;
}
export interface SankeyLink {
    target: number;
    source: number;
    value: number;
    sy: number;
    dy: number;
    ty: number;
}
export type Size = {
    width: number;
    height: number;
};
export type ActiveShape<PropsType = Record<string, any>, ElementType = SVGElement> = ReactElement<SVGProps<ElementType>> | ((props: PropsType) => ReactElement<SVGProps<ElementType>>) | ((props: unknown) => JSX.Element) | SVGProps<ElementType> | boolean;
export type XAxisMap = {
    [axisId: string]: XAxisProps;
};
export type YAxisMap = {
    [axisId: string]: YAxisProps;
};
export {};