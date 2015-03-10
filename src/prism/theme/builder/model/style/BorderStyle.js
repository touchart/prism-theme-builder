goog.provide("prism.theme.builder.model.style.BorderStyle");

goog.require("prism.theme.builder.model.style.Style");
goog.require("prism.theme.builder.model.style.StyleConstants");


/**
 * @constructor
 * @author Sandra https://github.com/SandraShklyaeva
 * 
 * @implements {prism.theme.builder.model.style.IStyle}
 */
prism.theme.builder.model.style.BorderStyle = function(width, style, color) {
	prism.theme.builder.model.style.Style.call(this,
			null);
	this.width = width;
	this.style = style;
	this.color = color;
};
goog.inherits(prism.theme.builder.model.style.BorderStyle,
		prism.theme.builder.model.style.Style);
/**
 * 
 */
prism.theme.builder.model.style.BorderStyle.prototype.update = function(style) {
	if (style.getWidth() != null) {
		this.width = style.getWidth();
	}
	if (style.getStyle() != null) {
		this.style = style.getStyle();
	}
	if (style.getColor() != null) {
		this.color = style.getColor();
	}
};

/**
 * @return {any} the width
 */
prism.theme.builder.model.style.BorderStyle.prototype.getWidth = function() {
	return this.width;
};

/**
 * @return {any} the style
 */
prism.theme.builder.model.style.BorderStyle.prototype.getStyle = function() {
	return this.style;
};

/**
 * @return {any} the color
 */
prism.theme.builder.model.style.BorderStyle.prototype.getColor = function() {
	return this.color;
};

/**
 * @override
 * @see prism.theme.builder.model.style.IStyle#toCSS()
 */
prism.theme.builder.model.style.BorderStyle.prototype.toCSS = function() {
	return this.name + ": " + (this.width != null ? this.width + "px" : "1px") + " "
			+ (this.style != null ? this.style : "solid") + " "
			+ (this.color != null ? this.color : "black");
}
