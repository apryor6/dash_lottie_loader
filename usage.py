import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from dash_lottie_loader import LottieLoader


app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

def get_lottie(style=None):
    return LottieLoader(
            html.Div([
                dcc.Graph(
                id='example-graph',
                figure={
                    'data': [
                        {'x': [1, 2, 3], 'y': [4, 1, 2], 'type': 'bar', 'name': 'Blue stuff!'},
                        {'x': [1, 2, 3], 'y': [2, 4, 5], 'type': 'bar', 'name': 'Orange Stuff!'},
                    ],
                    'layout': {
                        'title': 'Sample chart'
                    }
                }
            )
        ]),
        id='lottie-loaded',
        isFinishedLoading=False,
        style=style
    )

app.layout = html.Div([
    get_lottie({'display': 'none'}),
    html.Button('Click to pretend to load data for 5 seconds', id='click-me')
], id='container')

@app.callback(
    Output(component_id='lottie-loaded', component_property='style'),
    [Input(component_id='click-me', component_property='n_clicks')],
    [State(component_id='lottie-loaded', component_property='style')]
)
def start_loading(n_clicks, cur_style):
    c = n_clicks or 0
    if c > 0:
        return {'display': 'block'}
    else:
        return cur_style

@app.callback(
    Output(component_id='lottie-loaded', component_property='isFinishedLoading'),
    [Input(component_id='click-me', component_property='n_clicks')]
)
def finish_loading(n_clicks):
    c = n_clicks or 0 
    if c > 0:
        import time
        time.sleep(5)
        return True
    return False

@app.callback(
    Output(component_id='click-me', component_property='style'),
    [Input(component_id='click-me', component_property='n_clicks')],
    [State(component_id='click-me', component_property='style')]
)
def finish_loading(n_clicks, cur_style):
    c = n_clicks or 0 
    if c > 0:
        return {'display': 'none'}
    return cur_style


if __name__ == '__main__':
    app.run_server(debug=True)
