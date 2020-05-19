import React from 'react';

class Input extends React.Component {

    isInvalid() {
        if (this.props.showValidate && !this.props.valid) {
            return true;
        }
        return false;
    }

    render() {
        const inputType = this.props.type || 'text';
        const cls = ['sign-form-input', 'form-control'];

        if (this.isInvalid()) {
            cls.push('error');
        }

        return (
            <div className="form-group">
                <input type={inputType}
                       className={cls.join(' ')}
                       placeholder={this.props.placeholder}
                       onChange={this.props.onChange}
                       value={this.props.value || ''}
                       onBlur={this.props.onBlur}
                />
                <small className="error-message">{this.isInvalid() ? this.props.errorMessage : ''}</small>
            </div>
        );
    }
}

export default Input;
